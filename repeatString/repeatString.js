let repeatString = function(string, frequency) {
    let output = "";
    let i = 0;
    if (frequency < 0) {
        output = "ERROR";
    }
    else {
        while (i < frequency) {
            output += string;
            i++;
        }
    }
    return output;
}

module.exports = repeatString
