const calculator = (function() {

  var calcInput = [];
  var inputString = "";

  function calcAdd(a, b) {
    return a + b;
  }

  function calcSubtract(a, b) {
    return a - b;
  }

  function calcMultiply(a, b) {
    return a * b;
  }

  function calcDivide(a, b) {
    return a / b;
  }

  function calcRemainder(a, b) {
    return a % b;
  }

  function numToString(clicked_id) {
    inputString += clicked_id;
    console.log(inputString);
    document.querySelector('.answerBox').innerHTML = inputString;
  }

  function operToString(clicked_id) {
    inputString += " " + clicked_id + " ";
    console.log(inputString);
    document.querySelector('.answerBox').innerHTML = inputString;
  }

  // WORTHLESS NEGATIVE FUNCTION - SCRAPPED
  // function negToString(clicked_id) {
  //   if (inputString[0] !== '-') {
  //   inputString = "-" + inputString;
  //   document.querySelector('.answerBox').innerHTML = inputString;
  //   }
  // }

  function equalButton() {
    calcInput = inputString.split(" ");
    console.log(calcInput);
    let a = parseFloat(calcInput[0]);
    let b = parseFloat(calcInput[2]);
    if (calcInput[1] == '+') {
      calcCalculate(a, b, calcAdd);
      document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, calcAdd);
      inputString = calcCalculate(a, b, calcAdd);
      console.log(calcCalculate(a, b, calcAdd));
    }
    if (calcInput[1] == '−') {
      calcCalculate(a, b, calcSubtract);
      document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, calcSubtract);
      inputString = calcCalculate(a, b, calcSubtract);
      console.log(calcCalculate(a, b, calcSubtract));
    }
    if (calcInput[1] == '*') {
      calcCalculate(a, b, calcMultiply);
      document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, calcMultiply);
      inputString = calcCalculate(a, b, calcMultiply);
      console.log(calcCalculate(a, b, calcMultiply));
    }
    if (calcInput[1] == '/') {
      calcCalculate(a, b, calcDivide);
      document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, calcDivide);
      inputString = calcCalculate(a, b, calcDivide);
      console.log(calcCalculate(a, b, calcDivide));
    }
    if (calcInput[1] == '%') {
      calcCalculate(a, b, calcRemainder);
      document.querySelector('.answerBox').innerHTML = calcCalculate(a, b, calcRemainder);
      inputString = calcCalculate(a, b, calcRemainder);
      console.log(calcCalculate(a, b, calcRemainder));
    }
    console.log(inputString);
    console.log(calcInput);
  }

  function calcCalculate(a, b, cb) {
    return cb(a, b);
    console.log(cb(a,b));
  }

  return {
    calcInput: calcInput,
    calcAdd: calcAdd,
    calcSubtract: calcSubtract,
    calcMultiply: calcMultiply,
    calcDivide: calcDivide,
    calcRemainder: calcRemainder,
    numToString: numToString,
    operToString: operToString,
    equalButton: equalButton,
  }
})();

module.exports = calculator;
