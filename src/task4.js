import {checkNumber} from "./validator.js";
//import {mirrorNumber} from "./Functions.js";
import {mirrorString} from "./Functions.js";

export function isPalindrome (palindromeData){
    const error = '{status: ‘failed’, reason: ‘ Введите корректное значение. Пример: 123456789}';
    let number = checkNumber(palindromeData);
    let leftNumber;
    let rightNumber;
    let numString;
    //let result = '';
    //let count = 0;
    
    if (number !== false){
        number = String(number);

        for (let i = 0; i < number.length; i++){
            numString = number.substring(i);

            for (let j = 0; j < numString.length - 1; j++){
                // leftNumber = Number(numString.substring(0, numString.length - j));
                // rightNumber = mirrorNumber(leftNumber);
                leftNumber = numString.substring(0, numString.length - j);
                rightNumber = mirrorString(leftNumber);

                if (leftNumber === rightNumber){
                    return rightNumber;
                }
                //if (leftNumber === rightNumber){
                //result = result + rightNumber + '<br>';
                //count++;
                //}
            }
        }

        //if (count > 0){
        //    return result;
        //}
        return 0;
    }
    return error;
}
