export function checkNumber(number){
    number = parseInt(number);

    if (isNaN(number)){
        return false;
    }
    return number;
}



