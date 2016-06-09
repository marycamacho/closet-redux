/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//update profile to user collection

module.exports = function (dbConnection) {
    return function (req, res) {

        var myProfile = req.body;
        var ObjectId = require('mongodb').ObjectID;
        
        myProfile.modifyDate = new Date;
       
        dbConnection.collection('users').updateOne(
                { _id: ObjectId(`${req.session.userId}`)},
                { $set: { email: `${myProfile.email}`, address: `${myProfile.address}`, city: `${myProfile.city}`, state: `${myProfile.state}`, zip: `${myProfile.zip}`, favStyle: `${myProfile.favStyle}`, height: `${myProfile.height}`, weight: `${myProfile.weight}`, favColor: `${myProfile.favColor}` }}, function(err, result) {
                if (err) {
                    res.send("profile not updated")
                }
            });
            res.send("success-user-updated");
            res.end();

    }
};