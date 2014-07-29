#! /usr/bin/env node
var oneColor = require('onecolor');
var chalk = require('chalk');
var ntc = require('./ntc');

console.log(chalk.magenta(process.argv[2]) + ' name is ' + chalk.cyan(ntc.name(oneColor(process.argv[2]).hex())[1]));
