var express = require('express');
var bodyParser = require('body-parser');
//var methodOverride = require('method-override');
var Journal = require('./journalEntry.js');

function Server(port, router)
{
    var mongoose = require('mongoose');
    //var postFunc = require('./router.js');

    this.port = port;

    mongoose.connect('mongodb://127.0.0.1/journal', {useMongoClient: true});

    var db = mongoose.connection;

    db.on('error', console.error.bind('connection error:'));

    db.once('open', function(){
      console.log('Connection succesful');

    })
    var app = express();

    //routers
    var router = express.Router();


    app.use(express.static("client"));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use('/api', router);



    app.listen(port,function(){
      console.log("Server started at " + port);
    });
    require('./router.js')(app);
}

module.exports = Server;
