var mongoose = require('mongoose');

var linkSchema = new mongoose.Schema({
  link: { type: String, required: true },
  title: String,
  description: String,
  userid: String,
  time: { type : Date, default: new Date().getTime() },
  date: { type : Date, default: Date.now },
}, schemaOptions);

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
