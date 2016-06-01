/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//add new item to

module.exports = function (dbConnection) {
    return function (req, res) {

        var newItem = req.body;
        
        newItem.createDate = new Date;
       
        newItem.user = req.session.userId;
       
        dbConnection.collection('items').insertOne(newItem, function (err, result) {
            if (err) {
                res.send("error: something bad happened and your item was not saved")
            }
            res.send("success-item-posted");
            res.end();

        })
    }
};