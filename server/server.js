var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');

function Server(port, router)
{
   // var mongoose = require('mongoose');
    var Note = require('./note.js');
    var router = require('./router.js');

    this.port = port;

	this.router = router;

    var app = express();

    //routers
  /*  var router = express.Router();
    router.get('/notes', function(req, res){

        var note1 = new Note();
        note1.subect = "adweb";
        note1.notes = "hello world";
        return res.status(200).json(note1);
    });*/


    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use('/api', this.router);
    app.use(express.static("client"));


    app.listen(port,function(){
      console.log("Server started at " + port);
    });
}

module.exports = Server;
