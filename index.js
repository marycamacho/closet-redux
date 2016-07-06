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
    var _ = require ('lodash');


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

            if (!req.session.firstName)  {
                res.redirect("/logout");
                return;
            }
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


            res.json({user: req.session.firstName});

        });

        app.get('/fetch-profile', function (req, res) {
            var myProfile = require('./server/api/fetch-profile')(dbConnection);
            myProfile(req, res);
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

        app.post("/update-profile", function(req, res) {
            var myProfile = require('./server/api/update-profile')(dbConnection);
            myProfile(req, res);
        });
        
        //Closet

        app.get("/items", function (req, res) {
            var items = require('./server/api/items')(dbConnection);
            items(req, res);
        });

        app.get("/all_items", function (req, res) {
            var item = require('./server/api/all_items')(dbConnection);
            item(req, res);
        });

        app.get('/fetch_item/:id', function(req, res){
            const id = req.params.id;
            const obj_item = new ObjectID(`${id}`);
            
            
            dbConnection.collection('items').findOne({ '_id': obj_item}, function(err, result) {
                if (err) {
                    console.log('error: item not found in db');

                } else {
                    console.log(result);
                    console.log('item found in items collection');
                    //add function to determine 'isItemInMyItems' or isItemInSharedItems32
                    if (req.session.userId == result.user) {
                        result.isMyItem = true;
                        console.log('item found in user-myItems');
                        res.json(result);
                        res.end();
                    } else {
                        console.log(`userID of logged in user: ${req.session.userId}`);
                        dbConnection.collection('users').findOne(
                            {_id: ObjectID(req.session.userId)},{ _id:0, sharedItems: 1 }, function (err, matchedUser) {
                                if (err) {
                                    console.log('user cannot be found');
                                    res.json(result);
                                    res.end();
                                } else {
                                    var isShared = _.some(matchedUser.sharedItems, function(item)
                                    {
                                        return item.id.equals(obj_item);
                                    });
                                    console.log(isShared);
                                    if (isShared == true){
                                        result.isSharedItem = true;
                                        res.json(result);
                                        res.end();
                                    } else {
                                        res.json(result);
                                        res.end();
                                    }
                                }
                            })
                        }
                }

            })
        });

        app.get("/my_items", function (req, res) {
            var items = require('./server/api/items')(dbConnection);
            items(req, res);
        });

        app.get("/shared_items", function (req, res) {
            var items = require('./server/api/shared_items')(dbConnection);
            items(req, res);
        });

        app.get("/search_items", function (req, res) {
            var items = require('./server/api/search_items')(dbConnection);
            items(req, res);
        });

        app.post("/newItem", function(req, res) {
            var newItem = require('./server/api/new-item')(dbConnection);
            newItem(req, res);
        });
        
        app.post('/delete_item/:id', function(req,res) {
            const id = req.params.id;
            const obj_id = new ObjectID(`${id}`);
            console.log(`${obj_id} will be deleted`);


            dbConnection.collection('users').update(
                { _id: ObjectID(`${req.session.userId}`)},
                { $pull: { myItems : { id: obj_id}}}, function(err, result) {
                    if (err) {
                        res.send("nested element removed from user collection myItems")
                    }
                    dbConnection.collection('items').deleteOne({ '_id': obj_id}, function(err, result) {
                        if (err) {
                            console.log('error: item not found in items collection');
                        }
                        console.log('item successfully deleted');
                        res.end();
                    });
            });
        });

        app.post('/add_shared/:id', function(req,res) {
            const id = req.params.id;
            const obj_id = new ObjectID(`${id}`);
            console.log(`${obj_id} will be added to sharedItems`);

            // find imageURL from items collection
            dbConnection.collection('items').findOne({ '_id': obj_id}, function(err, result) {
                if (err) {
                    console.log('error: item not found in db');

                } else {
                    console.log(`item found in items collection: ${result}`);
                    const image = result.image;

                    //add id and image to myShared array in user collection
                    dbConnection.collection('users').update(
                        { _id: ObjectID(`${req.session.userId}`)},
                        { $push: { sharedItems : { "id": obj_id, "image" : image}}}, function(err, result) {
                            if (err) {
                                res.send("item not added to myShared in user collection")
                            }
                            console.log('item successfully added to myShared');
                            res.end();
                        });
                    }
            });
        });

        app.post('/remove_shared/:id', function(req,res) {
            const id = req.params.id;
            const obj_id = new ObjectID(`${id}`);
            console.log(`${obj_id} will be removed from sharedItems`);


            dbConnection.collection('users').update(
                { _id: ObjectID(`${req.session.userId}`)},
                { $pull: { sharedItems : { id: obj_id}}}, function(err, result) {
                    if (err) {
                        res.send("item not removed from myShared in user collection")
                    }
                    res.send('item successfully removed from myShared');
                    res.end();
                });
        });

        /*Always put last because it is sequential*/

        app.use(express.static('dev'));

        app.use (require('webpack-dev-middleware')(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        }));
        app.use(require('webpack-hot-middleware')(compiler));


        app.use(function (req, res, next) {
            // res.status(404);
            // res.send("File not found");
            res.sendFile(__dirname + '/dev/index.html');
        });

        app.listen(PORT, function () {
            console.log("server started on port " + PORT);
        });
    });
}());