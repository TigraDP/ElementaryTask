export function isNaturalNumber (value) {
    let pattern = /^(0|([-0-9]\d*))$/;
    return pattern.test(value);
}

export function isInteger(num) {
    return (num ^ 0) === num;
}

export function isNumberInt(value) {
    if (!isNaN(value) && !isNaN(parseInt(value))){
        return parseInt(value);
    }
    return false;
}

export function isNumberFloat(value) {
    if (!isNaN(value) && !isNaN(parseFloat(value))){
        return parseFloat(value);
    }
    return false;
}

export function arrayStringToArray (arrayString) {
    try {
        arrayString = eval('('+arrayString+')');
        return arrayString;
    }
    catch (err) {return false}
}






