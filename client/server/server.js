var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
var Journal = require('./journalEntry.js');
var journalCtrl = require('./controller/journal.server.controller.js');

function Server(port, router)
{
    var mongoose = require('mongoose');

    var postFunc = require('./router.js');

    this.port = port;

    mongoose.connect('mongodb://127.0.0.1/journal', {useMongoClient: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind('connection error:'));
    db.once('open', function(){
      console.log('Connection succesful');
      db.collection('Journals').findOne({title:'',body:'',category:'',year:''},function(err,data){
        if(data){
          console.log("found");
        }
      });
    })
    var app = express();

    //routers
    var router = express.Router();

    //postEntry();
    router.get('/journal', function(req, res){

        var entry = new Journal();
        entry.title = "Untitled";
        entry.body = "hello world";
        entry.category = "Life";
        entry.date = "11/24/2017"
        console.log("[SERVER - GET] New Journal Entry");
        return res.status(200).json(entry);
    });

    router.post('/notes', function(req, res){

        var entry = new Journal();
            entry.title = "Untitled";
            entry.body = "hello world";
            entry.category = "Life";
            entry.date = "11/24/2017"
            console.log("[SERVER - POST] New Journal Entry");

        return res.status(204).send(entry);
    });

    app.use(express.static("client"));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use('/api', router);



    app.listen(port,function(){
      console.log("Server started at " + port);
    });
}

module.exports = Server;
