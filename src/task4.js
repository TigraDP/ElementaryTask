import {sortingByMaximum} from "./functions.js";
import {reverseString} from "./functions.js";

export function isPalindrome(palindromeData){
    let number;
    let reverseNumber;
    let numString;
    let result = [];

    for (let i = 0; i < palindromeData.length; i++){
        numString = palindromeData.substring(i);

        for (let j = 0; j < numString.length - 1; j++){

            number = numString.substring(0, numString.length - j);
            reverseNumber = reverseString(number);

            if (number === reverseNumber){
                result.push(number);
            }
        }
    }

    if (result.length > 0){
        result = sortingByMaximum(result);
        return result[0];
    }
    return 0;
}