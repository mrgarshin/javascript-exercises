const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  if (arr.length == 0) {
    return 0
  } else {
    return arr.reduce((acc, elem) => acc + elem)
  }
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0
  } else {
    return arr.reduce((acc, elem) => acc * elem)
  }
};

const power = function(base, exponent) {
	return Math.pow(base, exponent)
};

const factorial = function(num) {
  let result = 1
	if ( num == 0) {
    result = 1
  } 
  else {
    for (let i = 1; i <= num; i++) {
      result *= i
    }
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
