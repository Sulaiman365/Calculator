//Calculator
let total = 0;
const display = document.querySelector('.display');
display.innerHTML = `${total}`;
let enteredKey;
let secondEnteredKey;

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

//operator
let operatorKey;
const keyDivide = document.querySelector('#divide-key');
keyDivide.addEventListener('click',() =>{
  operatorKey = 'division';
  display.innerHTML = "÷";
})

const keyPlus = document.querySelector('#plus-key');
keyPlus.addEventListener('click',() =>{
  operatorKey = 'addition';
  display.innerHTML = "+";
})

//numbers
const keyOne = document.querySelector('#one-key');
keyOne.addEventListener('click', () =>
{
   if (operatorKey !== undefined)
   {
      secondEnteredKey = 1;
      display.innerHTML = `${secondEnteredKey}`;
      total =  operate(total,operatorKey,secondEnteredKey);
   }
   else if(!operatorKey)
   {
      enteredKey = 1;
      total = 1;
      display.innerHTML = `${enteredKey}`;
   }
})

const keyTwo = document.querySelector('#two-key');
keyTwo.addEventListener('click', () =>
{
   if (operatorKey !== undefined)
   {
      secondEnteredKey = 2;
      display.innerHTML = `${secondEnteredKey}`;
      total =  operate(total,operatorKey,secondEnteredKey);
   }
   else if(!operatorKey)
   {
      enteredKey = 2;
      total = 2;
      display.innerHTML = `${enteredKey}`;
   }
})


//equal
const keyEqual = document.querySelector('#equals-key');
keyEqual.addEventListener('click',() => {
   display.innerHTML = `${total}`;
})


