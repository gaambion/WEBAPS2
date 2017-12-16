'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let categorySchema = new Schema({
    category: String
});

let journalSchema = new Schema({
    title: String,
    entry: String,
    category: String
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


var Category = mongoose.model('Category', categorySchema);
var Journal = mongoose.model('Journal', journalSchema);

module.exports = Category;
module.exports = Journal;
