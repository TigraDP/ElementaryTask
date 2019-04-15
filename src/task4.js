import {arrSortingByMaximum} from "./functions.js";
import {reverseString} from "./functions.js";
import {isNaturalNumber} from "./validator";

export function findPalindrome(palindromeData){
const error = {
    status: "failed",
    reason: "Enter a valid value - an integer greater than 10. Example: 123456789"
};
let mainResult;

if ((isNaturalNumber(palindromeData)) && (Number(palindromeData) > 10 || Number(palindromeData) < -10 ) ){
    mainResult = isPalindrome(palindromeData);
    if (mainResult.length > 0){
        mainResult = arrSortingByMaximum(mainResult);
        return mainResult[0];
    }
    return 0;
    }
    return "status:" + " " + error.status + "; " + "reason:" + " " + error.reason;
}

function isPalindrome(data){
    let number;
    let reverseNumber;
    let numString;
    let result = [];

    for (let i = 0; i < data.length; i++){
        numString = data.substring(i);

        for (let j = 0; j < numString.length - 1; j++){
            number = numString.substring(0, numString.length - j);
            reverseNumber = reverseString(number);

            if (number === reverseNumber){
                result.push(number);
            }
        }
    }
    return result;
}