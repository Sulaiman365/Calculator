//Calculator
let total = 0;
let operatorCount = 0; //to check if an operator has been clicked
let decimalCount =0;
let answerCount = 0 ;
const display = document.querySelector('.display');
display.innerHTML = `${total}`;
let enteredKey ="";
let secondEnteredKey ="";
let secondEnteredKeyInt;
let enteredKeyFloat;

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
operatorCount += 1;
decimalCount = decimalCount*0;
})

//numbers
const keyOne = document.querySelector('#one-key');
keyOne.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      if (operatorCount > 0) //execute anytime an operator is clicked
       {
         if (secondEnteredKey) //get and store total once secondEntered is defined
              { total =  operate(total,operatorKey,secondEnteredKeyInt);}
          secondEnteredKey = "";
          answerCount += 1;
       }
      operatorCount = operatorCount*0;
      secondEnteredKey += "1";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKey}`;
      
   }
   else if(!operatorKey)
   {
      enteredKey +="1";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyTwo = document.querySelector('#two-key');
keyTwo.addEventListener('click', () =>
{
   if (operatorKey !== undefined)
   {
      secondEnteredKey += "2";
      secondEnteredKeyInt = parseInt(secondEnteredKey);
      display.innerHTML = `${secondEnteredKey}`;
   }
   else if(!operatorKey)
   {
      enteredKey +="2";
      total = parseInt(enteredKey);
      display.innerHTML = `${enteredKey}`;
   }
   
})

const keyDecimal = document.querySelector('#point-key');
keyDecimal.addEventListener('click', () => {
   if (operatorKey && decimalCount == 0)
   {
      secondEnteredKey += ".";
   }
   else if(!operatorKey && decimalCount == 0)
   {
      enteredKey += ".";
   }
   decimalCount += 1;
})


//equal
const keyEqual = document.querySelector('#equals-key');
keyEqual.addEventListener('click',() => {
   if (answerCount > 0) { // do this operation for one new click only
      total =  operate(total,operatorKey,secondEnteredKeyInt);
   }
   answerCount = answerCount*0;
   //
   secondEnteredKey = "";
   display.innerHTML = `${total}`;
})


