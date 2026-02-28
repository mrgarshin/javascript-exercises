const removeFromArray = function(arr,...args) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i]) == false) {
            result.push(arr[i])
        }
    }
    // взять arr
    // если arr[i] нет в args, то добавить в result
    // если arr[i] есть в args, то пропустить
    // вернуть reuslt


    return result
};

// Do not edit below this line
module.exports = removeFromArray;
