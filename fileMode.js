'use strict';

const fs = require('fs');
const findRoots = require('./findRoots');

const path = process.argv[2];
let fileContents;

try {
  fileContents = fs.readFileSync(path, { encoding: 'utf8' });
} catch (error) {
  console.log('File path is not correct. Try again!');
  process.exit(1);
}

// This template means:
// ^ - start of line
// \S+ - one or more non-whitespace characters
// [\ \t]+ - one or more spare or tab characters
// \r?\n - either \r\n or \n (so it works for both Linux and Windows)
// $ - end of line
const validRegex = /^\S+[\ \t]+\S+[\ \t]+\S+\r?\n$/;

if (!validRegex.test(fileContents)) {
  console.log('Error. File contents should be as this example: "1 2 1\\n"');
  process.exit(1);
}

const words = fileContents.split(/[\ \t]+/);
const coefficients = words.map((el) => parseFloat(el));

if (coefficients.some((el) => Number.isNaN(el))) {
  console.log('Error. All arguments should be numbers');
  process.exit(1);
}

if (coefficients[0] === 0) {
  console.log('Error. "a" argument should not be equal to zero');
  process.exit(1);  
}

console.log(coefficients);

findRoots(coefficients);

