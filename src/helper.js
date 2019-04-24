function getSquareOfNumber(num,pow){
    return Math.pow(num,pow);
}

function reverseString(str){
    return str.split("").reverse().join("");
}

function arrSortingByMaximum(arr){
    return arr.sort(function(a,b){
        return b - a;
    });
}

function compareS(valueA, valueB){
    return valueB.sqrt - valueA.sqrt;
}

function sumOfDigits (value) {
    let sum = 0, tmp;
    while (value){
        tmp = value % 10;
        value = (value - tmp) / 10;
        sum += tmp;
    }
    return sum;
}

function fibonacciSeq(start, end){
    let result = [];
    let last = [0, 1];

    while (last[1] < end){
        if (last[1] > start) result.push(last[1]);
        last = [last[1], last[0] + last[1]];
    }
    return result;
}

function trianglesSqrt (a,b,c){
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function arrayStringToArray (arrayString){
    try {
        arrayFromString = eval('('+arrayString+')');
        return arrayFromString;
    }
    catch (err){
        errorMessage.reason = 'Enter a valid value.';
        return false;
    }
}
