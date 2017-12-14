'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let categorySchema = new Schema({
    category: String,
    createdOn: { type: Date, default: Date.now}
});

let journalSchema = new Schema({
    title: String,
    entry: String,
    category: categorySchema
});

journalSchema.statistics = {
  findAll() {
    return new Promise((resolve, reject) => {
      this.find({},(err,meetings) => {
        if(!err){
          resolve(meetings);
        } else {
          reject(err);
        }
      })
    }
  )
  }
}

var Journal = mongoose.model('Journal', journalSchema);

module.exports = Journal;
