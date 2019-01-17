/**
 * http://usejsdoc.org/
 */

var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
var path = require('path');
var http = require('http').Server(app);
//var db = require('../models/database.js');
var server = app.listen(8080);
//var io = require('socket.io')(http);
var io = require('socket.io').listen(server);
fs = require('fs');
var recData;
users = [];
connections = [];

app.use(express.bodyParser());
app.use(express.logger("default"));


app.use(express.cookieParser());
app.use(express.session({secret: 'thisIsMySecret'}));

//home page (news feed)
app.get('/', routes.get_homepage);




/* Run the server */


//app.listen(8080);
console.log('Server running on port 8080. Now open http://localhost:8080/ in your browser!');
