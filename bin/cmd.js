#!/usr/bin/env node

var optimist   = require('optimist');
var generator  = require('./../index.js');
var clipboard  = require('./../lib/copy.js');

var options    = {};
var args       = optimist.argv;
var vinoipsum  = '';

var sentenceMin  = options.sentenceMinimum || 4;
var sentenceMax  = options.sentenceMaximum || 11;

var paragraphMin = options.paragraphMinimum || 3;
var paragraphMax = options.paragraphMaximum || 7;
var count        = options.count || 1;
var format       = options.count || 'text';


// Generate the lorem ipsum text and print it out.
vinoipsum = generator(args);

console.log(vinoipsum);

// Copy the lorem ipsum text to the clipboard.
if (args.copy) {
  clipboard(vinoipsum, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit(); // Successful exit.
}