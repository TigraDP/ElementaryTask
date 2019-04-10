export function mirrorNumber(number){
    let dividend = number;
    let mirrorNumber = 0;
    while (dividend > 0){
        mirrorNumber = mirrorNumber * 10 + dividend % 10;
        dividend = Math.floor(dividend / 10);
    }
    return mirrorNumber;
}

export function mirrorString(str){
    return str.split("").reverse().join("");
}