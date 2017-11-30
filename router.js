'use strict';

var express = require('express');
var Journal = require('./client/server/journalEntry.js');
var journalCtrl = require('./client/server/controller/journal.server.controller.js');
var router = express.Router();

router.post('/notes', function(req, res){

/*    var entry = new Journal();
        entry.title = "Untitled";
        entry.body = "hello world";
        entry.category = "Life";
        entry.date = "11/24/2017"
        console.log("[SERVER] New Journal Entry");

    return journalCtrl.create(req, res);*/

    res.json({
    response: 'a POST request for CREATING answers',
    question: req.params.qID,
    body: req.body
  });


});


router.get('/', function(req, res){

   res.json({ response: 'a GET request for LOOKING at questions' });
});

router.post('/', (req, res) => {
  res.json({
    response: 'a POST request for CREATING questions',
    body: req.body
  });
});

router.get('/:qID', (req, res) => {
  res.json({
    response: `a GET request for LOOKING at a special answer id: ${req.params.qID}`
  });
});

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

router.use(function(err, req, res, next) {
    res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = router;





//routes

//router.post('/journal', journalCtrl.create);
//router.get('/standup/:id', journalCtrl.getById);
//router.get('/journalAll', journalCtrl.getAll);
/*
router.put('/standup/:id', journalCtrl.update);
router.patch('/standup/:id', journalCtrl.update);
router.delete('/standup/:id', journalCtrl.delete);*/

