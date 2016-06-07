/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//get items for display

module.exports = function (dbConnection) {

    return function (req, res) {
        if (!req.session.firstName) {;
            res.send("[]");
            return;
        } else {
            dbConnection.collection('items').find()
                .toArray(function (err, itemsArr) {
                    if (err) {
                        console.log('error creating items array');
                        res.send('[]');
                        
                    }
                    assert.equal(err, null);
                    
                    res.send(JSON.stringify(itemsArr));
                })
        }
    }
};