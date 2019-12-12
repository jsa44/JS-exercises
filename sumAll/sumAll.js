const sumAll = function(x,y) {
    let sum = 0;
    let i = 0;
    if (Math.sign(x)==-1 || Math.sign(y)==-1 ) {
            sum = "ERROR";
    }
    else if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        sum = "ERROR";
    }
    else {
        while (i <= Math.abs(y-x)) {
            if (x > y) {
                sum += (y+i);
            }
            else {
                sum += (x+i);
            }
            i++;
        }
    }
    return sum;
}

module.exports = sumAll
