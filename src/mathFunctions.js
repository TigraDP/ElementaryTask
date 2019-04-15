
//sum of number`s digits
export function sumOfDigits (value) {
    let sum = 0, tmp;
    while (value) {
        tmp = value % 10;
        value = (value - tmp) / 10;
        sum += tmp;
        return sum;
    }
}

//fibonacci sequence
export function fibonacciSeq(start, end, length){
    let result = [];
    if (length === null){
        let last = [0, 1];
        while (last[1] < end) {
            if (last[1] > start) result.push(last[1]);
            last = [last[1], last[0] + last[1]];
        }
    }
    else {let last = [0, 1];
        let tmp = '';
        end = '';
        for (let i = 0; i < length; i++){
            end += '9';
        }
        end = BigInt(end);
        while (last[1] < end) {if (last[1] > start && last[1]) tmp = BigInt(last[1]);
            if (String(tmp).length === length) result.push(tmp);
            last = [last[1], last[0] + last[1]];
        }
    }
    return result;
}

//sorting by square
export function compareS(valueA, valueB){
    return valueB.sqrt - valueA.sqrt}


//triangle square
export function trianglesSqrt (a,b,c){
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}