import {checkNumber} from "./checkNumber.js";
import {sortMaxMin} from "./sortMaxMin.js";
import {reverseString} from "./reverseString.js";

export function isPalindrome (palindromeData){
    const error = '{status: ‘failed’, reason: ‘ Введите корректное значение - целое число больше 10. Пример: 123456789}';
    let number = checkNumber(palindromeData);
    let leftNumber;
    let rightNumber;
    let numString;
    let result = [];

    if (number !== false){
        number = String(number);

        for (let i = 0; i < number.length; i++){
            numString = number.substring(i);

            for (let j = 0; j < numString.length - 1; j++){

                leftNumber = numString.substring(0, numString.length - j);
                rightNumber = reverseString(leftNumber);

                if (leftNumber === rightNumber){
                    result.push(rightNumber);
                }
            }
        }

        if (result.length > 0){
            result = sortMaxMin(result);
            return result[0];
        }
        return 0;
    }
    return error;
}
