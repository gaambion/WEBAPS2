var Note = require('../model/journal.server.model.js');
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
        StandUp.findById(id, function(err, data) {
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

    StandUp.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
}

//PUT /standup/:id
exports.update = function(req, res) {

    var id = req.params.id;
    var standup = req.body;

    StandUp.findById(id, function(err, entry) {
        if(err) return console.error(err);

        entry.title = standup.title;
        entry.body = standup.body;
        entry.category = standup.category;
        entry.date = standup.date;

        entry.save(function(err, data) {
            if(err) return console.error(err);

            res.status(204).send();
        });
    });

}

//DELETE /standup/:id
exports.delete = function(req, res) {
    var id = req.params.id;
    StandUp.findByIdAndRemove(id, function(err, data) {
        if(err) return console.error(err);

        res.status(204).send();
    });
}
