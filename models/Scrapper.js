var mongoose = require('mongoose');

var ScrapperSchema = new mongoose.Schema({
  link: { type: String, required: true },
  title: { type : String, default: ''},
  description: { type : String, default: ''},
  time: { type : Date, default: new Date().getTime() },
  date: { type : Date, default: Date.now },
}, schemaOptions);

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var Scrapper = mongoose.model('Scrapper', ScrapperSchema);

module.exports = Scrapper;
