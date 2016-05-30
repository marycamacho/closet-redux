/**
 * Created by mary on 5/16/16.
 */
//sendgrid

var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var config = require('../config.js');

// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html
var options = {
    auth: {
        api_key: config.sendgridKey
    }
};

var mailer = nodemailer.createTransport(sgTransport(options));

module.exports = mailer;
