/**
 * Created by mary on 5/14/16.
 */
;
(function () {
    "use strict";

    var PORT = 3700;
    var express = require('express');
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');
    var expressSession = require('express-session');
    var assert = require('assert');
    var config = require('./config.js');
    var app = express();
    var OAuth = require('oauthio');
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config.js');
    var compiler = webpack(webpackConfig);
    var ObjectID = require('mongodb').ObjectID;


    /*MiddleWare*/

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(expressSession({
        secret: config.secret,
        resave: true,
        saveUninitialized: true
    }));

    require ('./server/mongo-connection')(function(err, dbConnection){
        if (err) {
            console.log('no db connection');
            return
        }
        
        /*Routes*/

        //root*/

        app.get("/", function (req, res) {

            /*if (!req.session.firstName)  {
                res.redirect("index.html");
                return;
            }*/
            res.sendFile(__dirname + '/dev/index.html');

        });

        app.get("/login", function (req, res) {

            if (!req.session.firstName)  {
             res.redirect("/");
             return;
             }
            res.sendFile(__dirname + '/dev/oath.html');

        });

        // fetch current user for navbar

        app.get('/fetch_current_user', function (req, res) {
            if(!req.session.firstName) {
                res.send('there is not a user in session');
                return;
            }

            console.log(`user from /${req.session.firstName}`);
            res.json({user: req.session.firstName});

        });

        //logout

        app.get('/logout', function (req, res) {
            //destroy user's session to log them out
            req.session.destroy(function() {
                res.redirect('/oauth');
            });
        });

        //OAUTH

        OAuth.initialize( config.oauthAppKey, config.oauthSecretKey);

        app.get("/oauth", function (req, res) {
            res.sendFile(__dirname + '/dev/oath.html');
        });

        app.get('/loginfacebook', OAuth.auth('facebook', 'http://localhost:3700/oauth/redirect'));

        app.get('/logingoogle', OAuth.auth('google', 'http://localhost:3700/oauth/redirect'));

        app.get('/oauth/redirect', OAuth.redirect(function(result, req, res) {
            if (result instanceof Error) {
                res.status(500).res.send("error: " + result.message);
            }

            result.me().done(function(data) {
                //console.log(me);
                console.log(data.firstname);
                console.log(data.lastname);

                const newUser = {
                    "firstName": data.firstname,
                    "lastName": data.lastname
                };
                dbConnection.collection('users').find({"firstName": newUser.firstName, "lastName": newUser.lastName})
                    .toArray(function (err, matchingUsers) {
                        assert.equal(err, null);

                        if (matchingUsers != null && matchingUsers.length == 1) {
                            //console.dir(matchingUsers);
                            //console.dir(req.body.newcode);

                            //workflow:  user log in with oauth,

                            // if they are not in the db, save the user to the db { firstName, lastName }

                            req.session.firstName = matchingUsers[0].firstName;
                            req.session.userId = matchingUsers[0]._id;
                            res.redirect("/");
                            console.log("user found");
                            console.log(matchingUsers[0]._id);
                        }

                        else {
                            // if they are not in the db, save the user to the db { firstName, lastName }

                            dbConnection.collection('users').insertOne(newUser, function (err, result) {
                                if (err) {
                                    res.send("error: something bad happened and you were not signed up")
                                }
                                res.redirect("/");
                            });
                        }
                    });
            })

        }));
        
        //Closet

        app.get("/items", function (req, res) {
            var items = require('./server/api/items')(dbConnection);
            items(req, res);
        });

        app.get("/my_items", function (req, res) {
            var items = require('./server/api/items')(dbConnection);
            items(req, res);
        });

        app.post("/newItem", function(req, res) {
            var newItem = require('./server/api/new-item')(dbConnection);
            newItem(req, res);
        });

        /*Always put last because it is sequential*/

        app.use(express.static('dev'));

        app.use (require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        }));
        app.use(require('webpack-hot-middleware')(compiler));


        app.use(function (req, res, next) {
            res.status(404);
            res.send("File not found");
        });

        app.listen(PORT, function () {
            console.log("server started on port " + PORT);
        });
    });
}());