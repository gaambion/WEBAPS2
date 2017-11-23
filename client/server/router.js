var express = require('express');
var Journal = require('./journalEntry.js');
var journalCtrl = require('./controller/journal.server.controller.js');
//routers
var router = express.Router();

function postEntry(){
router.post('/notes', function(req, res){

    var entry = new Journal();
        entry.title = "Untitled";
        entry.body = "hello world";
        entry.category = "Life";
        entry.date = "11/24/2017"
        console.log("[SERVER] New Journal Entry");

    return journalCtrl.create(req, res);
});
}



//routes

//router.post('/journal', journalCtrl.create);
//router.get('/standup/:id', journalCtrl.getById);
router.get('/journalAll', journalCtrl.getAll);
/*
router.put('/standup/:id', journalCtrl.update);
router.patch('/standup/:id', journalCtrl.update);
router.delete('/standup/:id', journalCtrl.delete);*/

router.use(function(err, req, res, next) {
    logger.error(err);
    next(err);
});

router.use(function(err, req, res, next) {
    if(req.xhr) {
        res.status(500).json({ error: "Server exception occurred." });
    } else {
        next(err);
    }
});

router.use(function(err, req, res, next) {
    res.status(err.statusCode || 500).json({ error: err });
});

module.exports = router;

