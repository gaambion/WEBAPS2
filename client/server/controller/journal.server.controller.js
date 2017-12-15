var Journal = require('../model/journal.server.model.js');
//create


exports.create = function(req, res) {
    // Create and Save a new Journal
    if(!req.body.body) {
      res.status(400).send({message: "Journal can not be empty"});
    }
    var note = new Journal({
      title: req.body.title || "Untitled Journal",
      body: req.body.body,
      category: req.body.category,
      date: req.body.date
    });
    note.save(function(err, data) {
      console.log(data);
      if(err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while creating the Journal."});
      }else{
        res.send(data);
      }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Journal.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Journal.findById(req.params.noteId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.noteId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Journal.findById(req.params.noteId, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.noteId});
        }

        note.title = req.body.title;
        note.content = req.body.content;

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.noteId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Journal.remove({_id: req.params.noteId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "Journal deleted successfully!"})
        }
    });
};
