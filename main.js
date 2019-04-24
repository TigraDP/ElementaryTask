let out = document.getElementsByClassName('out');
let inp = document.getElementsByTagName ('input');
let btn = document.getElementsByTagName ('button');
let errorMessage = {
    status: "",
    reason: ""
};

//task1
btn.buildBoard.onclick = () =>{
    let width = inp.width.value;
    let height = inp.height.value;
    let symbol = inp.symbol.value;
    let chessboardResult = getChessboard(width,height,symbol);

    if (chessboardResult){
        out.boardOut.innerHTML = chessboardResult;
        } else{
            out.boardOut.innerHTML = JSON.stringify(errorMessage);
        }
};

//task2
btn.compareEnvelopes.onclick = () =>{
    let envelopeOne = {"a": inp.envelopeOneSideA.value, "b": inp.envelopeOneSideB.value};
    let envelopeTwo = { "c": inp.envelopeTwoSideC.value, "d": inp.envelopeTwoSideD.value};
    let envelopsResult = compareEnvelopes(envelopeOne, envelopeTwo);

    if (envelopsResult){
        out.envelopesOut.innerHTML = envelopsResult;
        } else{
            out.envelopesOut.innerHTML = JSON.stringify(errorMessage);
        }
};

//task3
btn.trianglesSort.onclick = () =>{
    let trianglesArr = inp.trianglesArr.value;
    let trianglesSortResult = trianglesSort(trianglesArr);

    if (trianglesSortResult){
        out.trianglesOut.innerHTML = trianglesSortResult;
        } else{
            out.trianglesOut.innerHTML = JSON.stringify(errorMessage);
        }
};

//task4
btn.findPalindrome.onclick = () =>{
    let palindromeCheckValue = inp.palindromeCheckValue.value;
    let palindromeResult = findPalindrome(palindromeCheckValue);

    if (palindromeResult){
    out.palindromeOut.innerHTML = palindromeResult;
    } else{
        out.palindromeOut.innerHTML = JSON.stringify(errorMessage);
    }
};

//task5
btn.getLuckyTicks.onclick = () =>{
    let context = {};
    context.min = inp.ticketsMin.value;
    context.max = inp.ticketsMax.value;
    let luckyTicketsResult = getLuckyTickets(context);

    if (luckyTicketsResult){
        out.ticketsOut.innerHTML = JSON.stringify(luckyTicketsResult);
    } else{
        out.ticketsOut.innerHTML = JSON.stringify(errorMessage);
    }
};

//task6
btn.getNumSeq.onclick = () =>{
    let rowLength = inp.rowLength.value;
    let squareOfNumber = inp.squareOfNumber.value;
    let numSeqResult = displayNumericSequence(rowLength,squareOfNumber);
    if (numSeqResult){
        out.numSeqOut.innerHTML = numSeqResult;
    } else{
        out.numSeqOut.innerHTML = JSON.stringify(errorMessage);
    }
};

//task7
btn.getFibSeq.onclick = () =>{
    let context = {};
    context.min = inp.fibonacciMin.value;
    context.max = inp.fibonacciMax.value;
    context.len = inp.fibonacciLength.value;
    let fibSeqResult = fibonacci(context);
    if (fibSeqResult){
        out.fibSeqOut.innerHTML = fibSeqResult;
    } else{
        out.fibSeqOut.innerHTML = JSON.stringify(errorMessage);
    }
};
