function fibonacci(context) {
    let fibonacciContext = {"min": context.min, "max": context.max};
    let fibonacciLen = naturalNumberValidation(context.len);
    let start;
    let end;
    
    if (fibonacciLen){
        start = Math.pow(10,fibonacciLen)/10;
        end = Math.pow(10,fibonacciLen)-1;
        return fibonacciSeq(start, end);
    } else if (objMinMaxParametersValidation(fibonacciContext)) {
        start = fibonacciContext.min;
        end = fibonacciContext.max;
        return fibonacciSeq(start, end);
    }
    return false;
}



