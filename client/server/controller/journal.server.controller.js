var Journal = require('../model/journal.server.model.js');
//create

//POST /journal
exports.create = function(req, res){
    var journal = req.body;
    var entry = new Journal({
        title: journal.title,
        body: journal.body,
        category: journal.category,
        date: journal.date,
    });

    entry.save(function(err, data) {
        if(err) return console.error(err);
    });

    res.status(204).send();

}

//GET /journal/:id
exports.getById = function(req, res, next) {
    return next(new Error('Oops this is an intentional error'));

    var id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send();
    } else {
        Journal.findById(id, function(err, data) {
            if(err) return next(err);

            if(data) {
                res.status(200).json(data);
            } else {
                res.status(404).send();
            }
        });
    }
}


//GET /journal
exports.getAll = function(req, res) {

    console.log("GETTING ALL ENTRIES");
    Journal.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
}

//PUT /journal/:id
exports.update = function(req, res) {

    var id = req.params.id;
    var journal = req.body;

    Journal.findById(id, function(err, entry) {
        if(err) return console.error(err);

        entry.title = journal.title;
        entry.body = journal.body;
        entry.category = journal.category;
        entry.date = journal.date;

        entry.save(function(err, data) {
            if(err) return console.error(err);

            res.status(204).send();
        });
    });

}

//DELETE /journal/:id
exports.delete = function(req, res) {
    var id = req.params.id;
    Journal.findByIdAndRemove(id, function(err, data) {
        if(err) return console.error(err);

        res.status(204).send();
    });
}
