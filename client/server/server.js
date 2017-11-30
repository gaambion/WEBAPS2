var express = require('express');
var bodyParser = require('body-parser');
var Journal = require('./model/journal.server.model.js');
function Server(port, router)
{
   var mongoose = require('mongoose');



   /* this.port = port;

    mongoose.connect('mongodb://localhost/journal', {useMongoClient: true});
    console.log("Done Connecting");*/
    var app = express();
    port = process.env.PORT || 3000;

    // mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/myJournalDB',  {useMongoClient: true});


    app.use(express.static("client"));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    var router = require('./router.js');
    app.use('/api', router);

    app.listen(port,function(){
      console.log("Server started at " + port);
    });

}
module.exports = Server;




   /* //routers
    var router = express.Router();

    router.post("/newJournal", function(req, res){
        var entry = new Journal({
            title: "Ayaw Gumana",
            body: "Gumana na pls",
            category: "life",
            date: "11/25/2017",
        });
        return res.status(204).send();

});
*/
    //postEntry();
 /*   router.get('/journal', function(req, res){

        var entry = new Journal();
        entry.title = "Untitled";
        entry.body = "hello world";
        entry.category = "Life";
        entry.date = "11/24/2017"
        console.log("[SERVER] New Journal Entry");
        return res.status(200).json(entry);
    });

    router.get('/showJournal', function(req, res) {

    console.log("GETTING ALL ENTRIES");*/
   /* Journal.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
});*/
