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
     else if (operator === 'subtraction')
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
   operatorCount += 1;
   getAndStoreTotal ();
  operatorKey = 'division';
  display.innerHTML = "÷";
//  operatorCount += 1;
decimalCount = decimalCount*0;
})

const keyPlus = document.querySelector('#plus-key');
keyPlus.addEventListener('click',() =>{
   operatorCount += 1;
   getAndStoreTotal ();
operatorKey = 'addition';
display.innerHTML = "+";
//operatorCount += 1;
decimalCount = decimalCount*0;
})

const keyMinus = document.querySelector('#minus-key');
keyMinus.addEventListener('click',() =>{
   operatorCount += 1;
   getAndStoreTotal ();
operatorKey = 'subtraction';
display.innerHTML = "-";
//operatorCount += 1;
decimalCount = decimalCount*0;
})

const keyTimes = document.querySelector('#multiply-key');
keyTimes.addEventListener('click',() =>{
   operatorCount += 1;
   getAndStoreTotal ();
operatorKey = 'multiplication';
display.innerHTML = "X";
//operatorCount += 1;
decimalCount = decimalCount*0;
//display.innerHTML = `${total}`;
})

//numbers
const getAndStoreTotal = function()
{
   if (operatorCount > 0) //execute anytime an operator is clicked
 {
        if (secondEnteredKeyInt) //get and store total once secondEntered is defined
             { 
               total =  operate(total,operatorKey,secondEnteredKeyInt);
               console.log(total);}
          secondEnteredKey = "";
          answerCount += 1; //remove
          console.log(total);
      }
}

const keyOne = document.querySelector('#one-key');
keyOne.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal ();
      operatorCount = operatorCount*0;
      secondEnteredKey += "1";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
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
   if (operatorKey) //if an operator is clicked for the first time
   {
     // getAndStoreTotal ();
      operatorCount = operatorCount*0;
      secondEnteredKey += "2";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="2";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyThree = document.querySelector('#three-key');
keyThree.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "3";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="3";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyFour = document.querySelector('#four-key');
keyFour.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
     // getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "4";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="4";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyFive = document.querySelector('#five-key');
keyFive.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "5";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="5";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keySix = document.querySelector('#six-key');
keySix.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
     // getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "6";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="6";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keySeven = document.querySelector('#seven-key');
keySeven.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
     // getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "7";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="7";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyEight = document.querySelector('#eight-key');
keyEight.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "8";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="8";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyNine = document.querySelector('#nine-key');
keyNine.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "9";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKeyInt}`;      
   }
   else if(!operatorKey)
   {
      enteredKey +="9";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

const keyZero = document.querySelector('#zero-key');
keyZero.addEventListener('click', () =>
{
   if (operatorKey) //if an operator is clicked for the first time
   {
      //getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += "0";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      if (isNaN(secondEnteredKeyInt))
      {display.innerHTML = `${secondEnteredKey}`;}
      else
      {display.innerHTML = `${secondEnteredKeyInt}`
      if (decimalCount > 0) {display.innerHTML = `${secondEnteredKey}`;};}    
   }
   else if(!operatorKey)
   {
      enteredKey +="0";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      display.innerHTML = `${total}`;
   }
})

//Decimal key
//const keyDecimal = document.querySelector('#point-key');
//keyDecimal.addEventListener('click', () => {
 //  if (operatorKey && decimalCount == 0)
 //  {
 //     secondEnteredKey += ".";
 //  }
 //  else if(!operatorKey && decimalCount == 0)
 //  {
//      enteredKey += ".";
//   }
//   decimalCount += 1;
//})
const keyDecimal = document.querySelector('#point-key');
keyDecimal.addEventListener('click', () => {
   if (operatorKey && decimalCount == 0)
   {
     // getAndStoreTotal();
      operatorCount = operatorCount*0;
      secondEnteredKey += ".";
      secondEnteredKeyInt = parseFloat(secondEnteredKey);
      display.innerHTML = `${secondEnteredKey}`; 
   }
   else if(!operatorKey && decimalCount == 0)
   {
      enteredKey +=".";
      enteredKeyFloat = parseFloat(enteredKey);
      total = enteredKeyFloat;
      if (isNaN(total))
      {display.innerHTML = `${enteredKey}`;}
      else
      {display.innerHTML = `${total}`;}
   }
   decimalCount += 1;
})

//equal
const keyEqual = document.querySelector('#equals-key');
keyEqual.addEventListener('click',() => {
   //if (answerCount > 0) { // do this operation for one new click only
      total =  operate(total,operatorKey,secondEnteredKeyInt); //remove
   //}
   answerCount = answerCount*0;
   //
   secondEnteredKey = "";
   display.innerHTML = `${total}`;
})

//Clear
const keyClear = document.querySelector('#clear-key');
keyClear.addEventListener('click',() => {
   total = 0;
   operatorKey = "";
   enteredKey = "";
   secondEnteredKey = "";
   enteredKeyFloat = 0*enteredKeyFloat;
   secondEnteredKeyInt = 0*secondEnteredKeyInt;
   decimalCount = 0;
   display.innerHTML = `${total}`;
})

//delete
const keyDel = document.querySelector('#del-key');
keyDel.addEventListener('click',() => {
   if (!operatorKey)
   {
     enteredKey = enteredKey.slice(-enteredKey.length,-1);
     if (enteredKey === "")
     {display.innerHTML = `${0}`;
     enteredKeyFloat = 0;
     total = enteredKeyFloat;}
     else {display.innerHTML = `${enteredKey}`;
     enteredKeyFloat = parseFloat(enteredKey);
     total = enteredKeyFloat;}
   }
   else if (operatorKey)
   {
     secondEnteredKey =  secondEnteredKey.slice(-secondEnteredKey.length,-1);
     if (secondEnteredKey === "")
     {display.innerHTML = `${0}`;
      secondEnteredKeyInt = 0;
      decimalCount = decimalCount*0}
     else {
     secondEnteredKeyInt = parseFloat(secondEnteredKey);
     display.innerHTML = `${secondEnteredKeyInt}`;}
   }
  
})




