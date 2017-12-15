let Journal = require("../model/journal.server.model.js");
let Category = require("../model/journal.server.model.js");
//POST /journal
exports.create = (req, res) =>{
    console.log(req);
    if(!req.body.entry) {
        res.status(400).send({message: "Journal can not be empty"});
    }
    var journal = new Journal({title: req.body.title || "Untitled Note",
                            entry: req.body.entry || "Empty Body"
                           });

    journal.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Note."});
        } else {
            console.log("Creating Succeeded");
            res.send(data);
        }
    });
};


//GET /journal
exports.findAll = function(req, res) {
    Journal.find(function(err, journal){
        console.log(journal);
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving journal."});
        } else {
            console.log("Retreiving Succeeded");
            res.send(journal);
        }
    });
};
