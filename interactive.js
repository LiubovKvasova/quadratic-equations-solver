'use strict';

const readline = require('readline');
const findRoots = require('./findRoots');

const prompts = ['a = ', 'b = ', 'c = '];
const coefficients = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: prompts[0]
});

rl.on('line', (line) => {
  const number = parseFloat(line);
  const isNumber = !Number.isNaN(number);

  if (isNumber) {
    //a === 0
    if (number === 0 && coefficients.length === 0) {
      console.log('Error. a should not be equal to 0');
    } else {
      coefficients.push(number);
      const promptIndex = coefficients.length;
      const prompt = prompts[promptIndex];
      rl.setPrompt(prompt); 
    }
  } else {
   console.log(`Error. Expected a valid real number, got "${line}" instead`);
  }

  if (coefficients.length === 3) {
    findRoots(coefficients);
    rl.close();
  }

  rl.prompt();
});

rl.on('close', () => {
  process.exit(0);
});

rl.prompt();
