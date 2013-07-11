#!/usr/bin/env node

var optimist   = require('optimist');
var generator  = require('./../index.js');


var options    = {};
var arguments  = optimist.argv;
var vinoipsum = '';

 var sentanceMin  = options.sentanceMinimum || 4;

    var sentanceMax  = options.sentanceMaximum || 11;
    var paragraphMin = options.paragraphMinimum || 3;
    var paragraphMax = options.paragraphMaximum || 7;
    var count        = options.count || 1;
    var format       = options.count || 'text';



options.units  = arguments.units || 'sentences';
options.count  = arguments.count || 1;
options.copy   = arguments.copy ? true : false;
options.format = arguments.format || 'plain';

// Generate the lorem ipsum text and print it out.
loremIpsum = generator({ count: 0, format: "paragraphs"});
console.log(loremIpsum);

// Copy the lorem ipsum text to the clipboard.
if (options.copy) {
  clipper(loremIpsum, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit(); // Successful exit.
}