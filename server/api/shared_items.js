/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//get items for display

module.exports = function (dbConnection) {

    var ObjectId = require('mongodb').ObjectID;

    return function (req, res) {
        if (!req.session.userId) {
            res.send("[]");

        } else {

            console.log(req.session.userId);
            dbConnection.collection('users').findOne(
                { _id: ObjectId(`${req.session.userId}`)},
                { "myItems" : 1, "sharedItems" : 1 },
                function (err, result) {
                    if (err) {
                        res.send('[]');

                    }
                    assert.equal(err, null);
                    result = result.myItems.concat(result.sharedItems);
                    res.json(result);
                });
        }
    }
};