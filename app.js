var express = require('express');
var browserSync = require('browser-sync');
const path = require('path');
var mongoose = require('mongoose');
var config = require('config');
var Server = require('./client/server/server.js');
var router = require('./client/server/router.js');
//var url = "mongodb://localhost:27017/mydb";
var app = express();

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './client', 'journal.html'));
});

app.use(express.static("client"));

var bs = browserSync.create();
bs.init({
  proxy: "localhost:4000",
  files: ["client/**"]
});

/*//database
var options = {
    keepAlive: 1,
    useMongoClient: true
};

mongoose.connect(config.get('db'), options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connection successful.');
});*/

/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection successful");
});*/


//server
var appServer = new Server(4000, router);
