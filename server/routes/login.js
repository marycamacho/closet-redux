/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');


//handle login

module.exports = function (dbConnection) {

    return function handleLogin(req, res, firstLogin) {
        var allFields = firstLogin ?
            (req.body.username && req.body.password && req.body.newcode) :
            (req.body.username && req.body.password);

        if (allFields) {
            dbConnection.collection('users').find({"username": req.body.username})
                .toArray(function (err, matchingUsers) {
                    assert.equal(err, null);

                    if (matchingUsers != null && matchingUsers.length == 1) {
                        //console.dir(matchingUsers);
                        //console.dir(req.body.newcode);

                        var isValid = firstLogin ?
                            (matchingUsers[0].password === req.body.password && matchingUsers[0].newCode == req.body.newcode) :
                            (matchingUsers[0].password === req.body.password);

                        if (isValid) {

                            if (firstLogin) {
                                //update user status when confirming account
                                var confirmedAcct = {$set: {"status": true}};
                                dbConnection.collection('users').updateOne({"username": req.body.username}, confirmedAcct, function (err, result) {
                                    if (err) {
                                        res.send("error: something bad happened and your account was not verified")
                                        //TODO: send toast message to user on the page "Your Account was not marked as validated."
                                    }
                                });
                            }

                            req.session.username = req.body.username;
                            req.session.userId = matchingUsers[0]._id;
                            res.redirect("/");
                            console.log("user found");
                        }
                        else {
                            res.redirect("/login");
                            console.log("bad password or code");
                            //TODO: send toast message to user on the page "The Username, Password or New User Code did not match our records."
                        }
                    } else {
                        res.redirect("/login");
                        console.log("no matching user");
                    }
                });
        }
    }
};


