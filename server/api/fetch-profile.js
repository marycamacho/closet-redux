/**
 * Created by mary on 6/5/16.
 */

var assert = require('assert');

//get user details for display

module.exports = function (dbConnection) {

    var ObjectId = require('mongodb').ObjectID;

    return function (req, res) {
        if (!req.session.userId) {
            res.send("[]");

        } else {

            console.log(req.session.userId);
            dbConnection.collection('users').findOne(
                { _id: ObjectId(`${req.session.userId}`)},
                function (err, result) {
                    if (err) {
                        res.send('[]');

                    }
                    assert.equal(err, null);
                    res.json(result);
                });
        }
    }
};