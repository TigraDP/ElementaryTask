export function isNaturalNumber (str) {
    let pattern = /^(0|([-0-9]\d*))$/;
    return pattern.test(str);
}

export function isInteger(num) {
    return (num ^ 0) === num;
}


//old
export function checkNumber(number){
    number = parseInt(number);
    if (isNaN(number)){
        return false;
    }
    else {
        return number;
    }
}

//empty string check
export function checkString(string){
    if (string === ""){
        return false;
    }
    else {
        return string;
    }
}

//obj false check
export function checkObjFalse(obj){
    for (let key in obj){
        if(isNaN(obj[key]) || obj[key] <= 0 ){
            return false;
        }
    }
    return true;
}

//array string to array and check
export function arrayStringToArray (arrayString) {
    try {
        arrayString = eval('('+arrayString+')');
        return arrayString;
    }
    catch (err) {return false}
}

