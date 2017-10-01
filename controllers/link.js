var Link = require('./../models/Link');
var request = require('request');
var cheerio = require('cheerio');

exports.linkGet = function(req, res) {
  Link.find({ userid: 'tobias'}).exec(function(err, links) {
    if (err) throw err;
    res.send({
      links: links
    });
  });
};

exports.linkPost = function(req, res) {
  /*var userid = req.user._id;
  console.log(req.user_id);
  if (userid !== false) {*/
  var linkData = req.body.link;
  var titleData = req.body.title;
  var descriptionData = req.body.description;

  var link = new Link({
    link: linkData,
    title: titleData,
    description: descriptionData,
    userid: userid,
  });

  link.save(function(err) {
    if (err) throw err;
    console.log('Link created!');
  });
};


exports.linkDelete = function(req, res) {
  Link.findOneAndRemove({ _id: req.body.id }, function(err) {
    if (err) throw err;
    console.log('Link deleted!');
  });
};

exports.linkUpdate = function(req, res) {
  Link.findById(req.body.id, function(err, link) {
    if (err) throw err;

    link.link = req.body.link;
    link.title = req.body.title;
    link.description = req.body.description;

    link.save(function(err) {
      if (err) throw err;
      console.log('Link successfully updated!');
    });

  });
};
