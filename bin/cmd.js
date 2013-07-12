#!/usr/bin/env node

var optimist   = require('optimist');
var generator  = require('./../index.js');
var clipboard  = require('./../lib/copy.js')

var options    = {};
var arguments  = optimist.argv;
var vinoipsum = '';

var sentanceMin  = options.sentanceMinimum || 4;

var sentanceMax  = options.sentanceMaximum || 11;
var paragraphMin = options.paragraphMinimum || 3;
var paragraphMax = options.paragraphMaximum || 7;
var count        = options.count || 1;
var format       = options.count || 'text';


// Generate the lorem ipsum text and print it out.
vinoipsum = generator(arguments);

console.log(vinoipsum);

// Copy the lorem ipsum text to the clipboard.
if (arguments.copy) {
  clipboard(vinoipsum, function(err) { err ? process.exit(1) : process.exit() });
} else {
  process.exit(); // Successful exit.
}