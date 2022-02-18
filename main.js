'use strict';

const readline = require('readline');

const prompts = ['a = ', 'b = ', 'c = '];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: prompts[0]
});

const coefficients = [];

rl.prompt();

rl.on('line', (line) => {
  const number = parseFloat(line);
  const isNumber = !Number.isNaN(number);

  if (isNumber){
    coefficients.push(number);
    const promptIndex = coefficients.length;
    const prompt = prompts[promptIndex];
    rl.setPrompt(prompt); 
  } else{
   console.log(`Error. Expected a valid real number, got "${line}" instead`);
  }

  if (coefficients.length === 3){
    console.log(coefficients);
    rl.close();
  }

  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});