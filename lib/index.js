#! /usr/bin/env node
var oneColor = require('onecolor');
var chalk = require('chalk');
var ntc = require('./ntc');
var color = oneColor(process.argv[2]);

if (!process.argv[2]) {
  console.log('Usage: name-that-color "#C0FFEE"');
} else if (color === false) {
  console.log('"' + process.argv[2] + '" is not a valid color.');
} else {
  console.log(chalk.magenta(process.argv[2]) + ' name is ' + chalk.cyan(ntc.name(oneColor(process.argv[2]).hex())[1]));
}


