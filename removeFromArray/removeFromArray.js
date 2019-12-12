const removeFromArray = function(inputArray) {
    let i = 1;
    let trimmedArray = inputArray;
    while (i < arguments.length) {
        let indexToRemove = inputArray.indexOf(arguments[i]);
        if (indexToRemove !== -1) {
            trimmedArray.splice(indexToRemove,1);
        }
        i++;
    }
    return trimmedArray;
}

module.exports = removeFromArray

// let indexRemove = inputArray.indexOf(arguments[1]);
// let trimmedArray = inputArray;
// trimmedArray.splice(indexRemove, 1);
// return trimmedArray;