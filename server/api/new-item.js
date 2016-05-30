/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//add new item to closet

module.exports = function (dbConnection) {
    return function (req, res) {

        var newItem = req.body.newItem;
        newItem.user = req.session.userId;
        newItem.createDate = new Date;
        dbConnection.collection('items').insertOne(newItem, function (err, result) {
            if (err) {
                res.send("error: something bad happened and your item was not saved")
            }
            res.send("success-item-posted");
            res.end();

        })
    }
};