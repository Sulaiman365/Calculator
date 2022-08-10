//Calculator


const add = function(firstNumber,secondNumber) {
    let sum = firstNumber + secondNumber;
      return sum;
  };

  const subtract = function(firstNumber,secondNumber) {
	let difference = firstNumber - secondNumber;
  return difference;
};

const multiply = function(firstNumber,secondNumber) {
    let product = firstNumber * secondNumber;
    return product;
}

const divide = function(firstNumber,divisor) {
    let divisionResult = firstNumber/divisor;
    return divisionResult; 
}

const operate = function(firstNumber,operator,secondNumber) {
     let result;
     if (operator === 'addition')
     {
        result = add(firstNumber,secondNumber);
     }
     else if (operator === 'subraction')
     {
        result = subtract(firstNumber,secondNumber);
     }
     else if (operator === 'multiplication')
     {
        result = multiply(firstNumber,secondNumber);
     }
     else if (operator === 'division')
     {
        result = divide(firstNumber,secondNumber);
     }
     return result;
}