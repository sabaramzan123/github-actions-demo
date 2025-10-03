const calculateScreen = document.querySelector(".calculate");

const resultScreen = document.querySelector(".result");

// variable to store the calculation value
let calculateValue = "";

// Array of valid operators
let operators = ['+', '-', '*', '%', '/'];

// function is called when the number is pressed
function tapNum(numValue) {
    // prevent a decimal number from being added when the calculation string is empty
    if(calculateValue == '' && numValue == '.'){
        return;
    }

    // prevent consecutive decimal points from being added
    if(calculateValue.at(-1) == '.' && numValue == '.'){
        return;
    }

  // add the number to the calcultion screen
  addCalcualteScreen(numValue);
}

// function called when an operator is pressed
function tapOperator(operatorValue) {
    // do not allow the operator when the calculation string is empty
    if(calculateValue == ''){
        return;
    }

    // prevent consecutive operators from being pressed
    if(operators.some(operator => calculateValue.at(-1) == operator)){
        return;
    }

    // if there is a previous result and it's not an error use it as a starting value for the next calculation
    if(resultScreen.textContent != '' && resultScreen.textContent != 'Error'){
        calculateValue = resultScreen.textContent;
        resultScreen.textContent = '';
    }

  addCalcualteScreen(operatorValue);
}

// function called when an equal button is pressed
function tapResult() {
  try {
    resultScreen.textContent = eval(calculateValue);
  } catch (error) {
    resultScreen.textContent = "Error";
  }
}

// function called when clear button is pressed
function tapClear(){
    // clear the calculated value
    calculateValue = '';

    // reset the calculation and resuslt screen
    calculateScreen.textContent = calculateValue;
    resultScreen.textContent = '';
}

// function called when delete button is pressed
function tapDel(){
    //  remove the last number from the calculation string
    calculateValue = calculateValue.slice(0,-1);

    // /clear the result screen
    resultScreen.textContent = '';

    // update the calcultion screen
    calculateScreen.textContent = calculateValue;
}

// function to add the value to the calculation screen
function addCalcualteScreen(value) {
  //append the value to the calculation string
  calculateValue += value;
  // update the calculation screen display
  calculateScreen.textContent = calculateValue;
}
