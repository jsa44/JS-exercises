const reverseString = function(input) {
    let textArray = input.split("");
    let revArray = textArray.reverse();
    return revArray.join("");
}

module.exports = reverseString
