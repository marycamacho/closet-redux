/**
 * Created by mary on 5/16/16.
 */

var assert = require('assert');

//get search items for display

module.exports = function (dbConnection) {

    var ObjectId = require('mongodb').ObjectID;


    return function (req, res) {
        const category = req.query.category;
        const size = req.query.size;
        const color = req.query.color;
        const style = req.query.style;

        var categoryQuery = "";
        var sizeQuery = "";
        var colorQuery = "";
        var styleQuery = "";

        // create query var statements for each parameter

        if (category) {
            categoryQuery = ` "category" : "${category}"`;
        }

        if (size) {
            sizeQuery = `, "size"  : "${size}" `;
        }

        if (color) {
            colorQuery = `, "color" : "${color}" `;
        }

        if (style) {
            styleQuery = `, "style" : "${style}' `;
        }


       /// adjust vars for null values and commas

        if (!categoryQuery && sizeQuery) {
            sizeQuery = ` "size"  : "${size}" `;
        }
        if(!categoryQuery && !sizeQuery && colorQuery) {
            colorQuery = ` "color" : "${color}" `;
        }
        if (!categoryQuery && !sizeQuery && !colorQuery && styleQuery) {
            styleQuery = ` "style" : "${style}" `;
        }

        // construct query

        var itemQuery= `{${categoryQuery} ${sizeQuery} ${colorQuery} ${styleQuery} }`;

        console.log(`itemQuery: ${itemQuery}`);

        var newQuery = JSON.parse(itemQuery);

        console.log(typeof newQuery);
        console.log(newQuery);


        dbConnection.collection('items').find(newQuery).toArray(function (err, itemsArr) {
                if (err) {
                    console.log('error creating items array');
                    res.send('[]');

                }
                assert.equal(err, null);

                res.send(JSON.stringify(itemsArr));
                
            })
    }
};