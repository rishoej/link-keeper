var Link = require('./../models/Scrapper');
var request = require('request');
var cheerio = require('cheerio');

exports.scrapperGet = function(req, res) {
  let link = '';
  let title = '';
  let description = '';


  function site(link, title, description) {
    res.send({
      site: {
        link: link,
        title: title,
        description: description
      }
    });
  }

  if(req.param('site')) {
    link = req.param('site');
    request(link, function(err, resp, html) {
      if (!err){
        var $ = cheerio.load(html);
        title = $('title').text();
        description = $('meta[property="og:description"]').attr('content');
      }
      site(link, title, description);
    });
  } else {
    site(link, title, description);
  }
};
