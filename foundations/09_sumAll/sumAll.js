const sumAll = function(a,b) {
    let result = 0;
    let min = a;
    let max = b;
    if ((typeof a != typeof 1) || (typeof b != typeof 1) || (a < 0) || (b < 0) || (Number.isInteger(a) != true) || (Number.isInteger(b) != true) ) {
        result = "ERROR"
    } else {
        if (a > b) {
            min = b;
            max = a;
        }
        for (let i = min; i <= max; i++) {
            result += i
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
