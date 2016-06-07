/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//add new item to

module.exports = function (dbConnection) {
    return function (req, res) {

        var newItem = req.body;
        var ObjectId = require('mongodb').ObjectID;
        
        newItem.createDate = new Date;
       
        newItem.user = req.session.userId;
       
        dbConnection.collection('items').insertOne(newItem, function (err, result) {
            if (err) {
                res.send("error: something bad happened and your item was not saved")
            }
            
            const itemObj = ObjectId(result._id);
            dbConnection.collection('users').update(
                { _id: ObjectId(`${req.session.userId}`)},
                { $push: { myItems : { id: itemObj, "image" : `${newItem.image}`}}}, function(err, result) {
                if (err) {
                    res.send("id as image url not added to user collection")
                }
            });
            res.send("success-item-posted");
            res.end();

        })


    }
};