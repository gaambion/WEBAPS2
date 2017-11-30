'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var categorySchema = new Schema({
    category: String,
    createdOn: { type: Date, default: Date.now}
});

var journalSchema = new Schema({
    title: String,
    body: String,
    category: categorySchema,
    date: { type: Date, default: Date.now}
});

var Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
