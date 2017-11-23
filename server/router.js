var express = require('express');
var browserSync = require('browser-sync');
var bodyParser = require('body-parser');

var Note = require('./note.js');
var noteCtrl = require('./controller/journal.server.controller.js');

//routers
var router = express.Router();
/*
router.post('/notes', function(req, res){

    var note1 = new Note();
    note1.subect = "adweb";
    note1.notes = "hello world";
    //return res.json(note1);

    return noteCtrl.create(req, res);
});

*/


//routes

/*router.post('/standup', noteCtrl.create);
router.get('/standup/:id', noteCtrl.getById);
router.get('/standup', noteCtrl.getAll);
router.put('/standup/:id', noteCtrl.update);
router.patch('/standup/:id', noteCtrl.update);
router.delete('/standup/:id', noteCtrl.delete);*/

module.exports = router;
