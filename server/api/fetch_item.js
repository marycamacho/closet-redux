/**
 * Created by mary on 6/2/16.
 */
var assert = require('assert');

//get items for display

module.exports = function (dbConnection) {

    return function (req, res) {
        

        //const itemId = `{'_id': '${id}'}`;
        //console.log(itemId);


        dbConnection.collection('items').find(itemId)
            .toArray(function(err, itemArr) {
                if (err) {
                    res.send("error: something bad happened and your item was not found");
                    return;
                }
                assert.equal(err, null);
                return res.send(JSON.stringify(itemArr));
            })


    }
};