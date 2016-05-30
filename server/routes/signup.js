/**
 * Created by mary on 5/16/16.
 */

/**
 * Created by mary on 5/16/16.
 */
var assert = require('assert');
var mailer = require('../mailer');


//new user signup

function sendWelcomeEmail (email, newCode) {
    

    var welcomeEmail = {
        to: email,
        from: 'messagingapp@marycamacho.com',
        subject: 'Account Activation',
        text: 'Awesome sauce!  Please copy and paste the link below into a browser window. Then enter this New User Code:' + newCode + ' into the form along with your login and password and your account will be activated. ' + 'http://localhost:3000/first-login.html',

        html: '<H2>Awesome sauce!</H2><div>Please click the following link and then login with your user name and password along with this special New User Code: <span class="blue">' + newCode + '</span> to confirm your account: <a href="http://localhost:3700/pages/first-login.html">Confirm Your Account</a></div>'
    };

    mailer.sendMail(welcomeEmail, function(err, res) {
        if (err) {
            console.log(err)
        }
        console.log(res);
    });
}

//unique code created for each new user for validation of account and email
function createUserCode (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

module.exports = function (dbConnection) {
    return function (req, res) {
        if (req.body.username && req.body.password) {
            var newUser = {
                "username": req.body.username,
                "password": req.body.password,
                "email": req.body.email,
                "status": false
            };
            dbConnection.collection('users').insertOne(newUser, function (err, result) {
                if (err) {
                    res.send("error: something bad happened and you were not signed up")
                }

                var newCode = createUserCode(9);
                console.log(newCode);


                //update user with newCode
                dbConnection.collection('users').updateOne({"username": req.body.username}, {$set: {"newCode": newCode}}, function (err, result) {
                    if (err) {
                        res.send("error: something bad happened and newCode was not added")
                    }
                });
                
                sendWelcomeEmail(req.body.email, newCode);

                res.redirect("./pages/signup-thankyou.html");

            });
        }
    }
};
    
