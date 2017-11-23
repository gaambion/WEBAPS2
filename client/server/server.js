var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
var Journal = require('./journalEntry.js');
function Server(port, router)
{
    var mongoose = require('mongoose');

    var router = require('./router.js');

    this.port = port;

    mongoose.connect('mongodb://localhost/journal', {useMongoClient: true});
    console.log("Done Connecting");
    var app = express();

    //routers
    var router = express.Router();
    router.get('/journal', function(req, res){

        var entry = new Journal();
        entry.title = "Untitled";
        entry.body = "hello world";
        entry.category = "Life";
        entry.date = "11/24/2017"
        console.log("[SERVER] New Journal Entry");
        return res.status(200).json(entry);
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
