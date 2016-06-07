/**
 * Created by mary on 6/2/16.
 */
var assert = require('assert');

//get items for display using image url

module.exports = function (dbConnection) {

    return function (req, res) {
        
        const id = req.params.id;
        console.log(id);

        dbConnection.collection('items').findOne(
            {'image' : id }, (function(err, result) {
                if (err) {
                    console.log("error: something bad happened and your item was not found");
                    return;
                }
                console.log(`item in indexJS: ${result}`);
                res.json(result);
                res.end();
            })


    }
};