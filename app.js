var express = require('express');
var browserSync = require('browser-sync');
const path = require('path');

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
app.listen(4000,function(){
  console.log("Server started at 3000.");
});
