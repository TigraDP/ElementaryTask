import {isPalindrome} from './src/task4.js';

let out = document.getElementsByClassName('out');
let inp = document.getElementsByTagName ('input');
let btn = document.getElementsByTagName ('button');

//task4
btn.getPalindrome.onclick = () =>{
    let palindromeData = inp.palindromeData.value;
    out.palindromeOut.innerHTML = isPalindrome(palindromeData);
};

