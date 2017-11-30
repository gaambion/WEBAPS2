
//POST /journal
exports.create = (req, res) =>{
    console.log(req.body);
    res.status(204).send();
};

//GET /journal
exports.getAll = (req, res) => {
    var entry = [{
        title: "Animo",
        body: "La Salle",
        category: "school",
        date: "Nov. 29, 2017",
    }];
    res.status(200).send(entry);
};
