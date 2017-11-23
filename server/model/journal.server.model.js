var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var journalSchema = new Schema({
    title: String,
    body: String,
    category: String,
    date: String,
    createdOn: { type: Date, default: Date.now}
});

var Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
