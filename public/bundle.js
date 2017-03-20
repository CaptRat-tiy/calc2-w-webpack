/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map