var blindipsum = require('blindipsum');
var dict = require('./data/dictionary');

var generator = function(args) {

  var count         = args.count || 1;
  var convert_utf8  = args.utf8 || true;
  var format        = 'plain';
  var unit          = 'paragraph';

  if ( args.s || args.sentence) {
    unit = 'sentence';
  }

  if ( args.w || args.word) {
    unit = 'word';
  }

  if ( args.html) {
    format = 'html';
  }

  if ( args.json) {
    format = 'json';
  }

  var ipsum = blindipsum({
    count: count,
    utf8: convert_utf8,
    format: format,
    unit: unit
  });

  ipsum.setDictionary(dict);

  return ipsum.generate();
};

module.exports = generator;
