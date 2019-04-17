import {getChessboard} from './task1.js';
import {envelopes} from './task2.js';
import {trianglesSort} from './task3.js';
import {findPalindrome} from './task4.js';
import {getLuckyTickets} from './task5.js';
import {numSeq} from './task6.js';
import {fibonacci} from './task7.js';


let out = document.getElementsByClassName('out');
let inp = document.getElementsByTagName ('input');
let btn = document.getElementsByTagName ('button');

//task1
btn.buildBoard.onclick = () =>{
    let width = inp.width.value;
    let height = inp.height.value;
    let symbol = inp.symbol.value;
    out.boardOut.innerHTML = getChessboard(width,height,symbol);
};

//task2
btn.putEnvelope.onclick = () =>{
    let envelopeOne = {"a": inp.envelopeOneSideA.value, "b": inp.envelopeOneSideB.value};
    let envelopeTwo = { "c": inp.envelopeTwoSideC.value, "d": inp.envelopeTwoSideD.value};
    out.envelopeOut.innerHTML = envelopes(envelopeOne, envelopeTwo);
};

//task3
btn.trianglesSort.onclick = () =>{
    let trianglesArr = inp.trianglesArr.value;
    out.trianglesOut.innerHTML = trianglesSort(trianglesArr);
};

//task4
btn.getPalindrome.onclick = () =>{
    let palindromeData = inp.palindromeData.value;
    out.palindromeOut.innerHTML = findPalindrome(palindromeData);
};

//task5
btn.getLuckyTicks.onclick = () =>{
    let min = inp.ticketsMin.value;
    let max = inp.ticketsMax.value;
    out.ticketsOut.innerHTML = getLuckyTickets(min, max);
};

//task6
btn.getNumSeq.onclick = () =>{
    let n = inp.n.value;
    let m = inp.m.value;
    out.numSeqOut.innerHTML = numSeq(n,m);

};

//task7
btn.getFibSeq.onclick = () =>{
    let min = inp.fibonacciMin.value;
    let max = inp.fibonacciMax.value;
    let length = inp.fibonacciLength.value;
    out.fibSeqOut.innerHTML = fibonacci(min,max,length);
};
