import {isPalindrome} from './task4.js';
import {isNaturalNumber} from './validator.js';


let out = document.getElementsByClassName('out');
let inp = document.getElementsByTagName ('input');
let btn = document.getElementsByTagName ('button');

//task4
btn.getPalindrome.onclick = () =>{
    const error = {
        status: "failed",
        reason: "Enter a valid value - an integer greater than 10. Example: 123456789"
    };
    let palindromeData = inp.palindromeData.value;
    if ((isNaturalNumber(palindromeData)) && (Number(palindromeData) > 10 || Number(palindromeData) < -10 ) ){
        out.palindromeOut.innerHTML = isPalindrome(palindromeData);
    } else {
        out.palindromeOut.innerHTML = "status:" + " " + error.status + "; " + "reason:" + " " + error.reason;
    }
};

