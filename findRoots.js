'use strict';

const findRoots = (coefficients) => {
  const [a, b, c] = coefficients;
  console.log(`Equation is: (${a})*x^2 + (${b})*x + (${c}) = 0`);
  const discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    const rootDiscriminant = Math.sqrt(discriminant);
    const x1 = (-b + rootDiscriminant) / (2 * a);
    const x2 = (-b - rootDiscriminant) / (2 * a);
    
    console.log('There are 2 roots');
    console.log(`x1 = ${x1} \nx2 = ${x2}`);
  } else if (discriminant === 0) {
    const x1 = -b / (2 * a);
    
    console.log('There is 1 root');
    console.log('x = ' + x1);
  } else {
    console.log('There are 0 roots');
  }
};

module.exports = findRoots;