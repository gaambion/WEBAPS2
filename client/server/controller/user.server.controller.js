var User = require('../model/user.server.model.js');
//create


exports.create = function(req, res) {
    // Create and Save a new User
    if(!req.body.username) {
      res.status(400).send({message: "Usename can not be empty"});
    }
    if(!req.body.password) {
      res.status(400).send({message: "Password can not be empty"});
    }
    var note = new User({
      username: req.body.username,
      password: req.body.password
    });
    note.save(function(err, data) {
      console.log(data);
      if(err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while creating the User."});
      }else{
        res.send(data);
      }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find(function(err, notes){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving notes."});
        } else {
            res.send(notes);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a userId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a note identified by the userId in the request
    User.findById(req.params.userId, function(err, note) {
        if(err) {
            res.status(500).send({message: "Could not find a note with id " + req.params.userId});
        }

        note.title = req.body.username;
        note.body = req.body.password;

        note.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update note with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified userId in the request
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete note with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};
