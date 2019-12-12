const leapYears = function(x) {
    let isLeapYear;
    if (x % 4 == 0) {
        if (x % 100 == 0 ){
            if (x % 400 == 0) {
                isLeapYear = true;
            }
            else {
                isLeapYear = false;
            }
        }
        else {
            isLeapYear = true;
        }
    }
    else {
        isLeapYear = false;
    }
    return isLeapYear;
}

module.exports = leapYears
