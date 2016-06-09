/**
 * Created by mary on 6/5/16.
 */

var assert = require('assert');

//get user details for display

module.exports = function (dbConnection) {

    var ObjectID = require('mongodb').ObjectID;

    return function (req, res) {
        if (!req.session.userId) {
            res.send("[]");

        } else {

           
            dbConnection.collection('users').findOne(
                { _id: ObjectID(`${req.session.userId}`)},
                function (err, result) {
                    if (err) {
                        res.send('[]');

                    }
                    assert.equal(err, null);
                    console.log(result);
                    res.json(result);
                });
        }
    }
};