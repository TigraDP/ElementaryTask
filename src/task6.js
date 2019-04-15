import {checkNumber} from "./validator.js";

export function numSeq(n,m){
    let error = '{status: ‘failed’, reason: ‘ Введите корректоные значения (натуральные числа). Пример: n = 25, m =50}';
    let result = [];
    let len = 0;
    n = checkNumber(n);
    m = checkNumber(m);
    //check values
    if (n === false ||  m === false || n === 0) {
        return error;
    }
    else {
        for (let i = 0; len < n; i++) {
            if (Math.pow(i,2) >= m){
                result.push(i);
                len++;
            }
        }
    return String(result);
    }
}