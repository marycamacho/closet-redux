//mongodb

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/closet-db';
//Opens Monggo client (this works fine unless we need db before login -- how would we do this differently?)

module.exports = function(cb) {
    MongoClient.connect(url, cb) 
};