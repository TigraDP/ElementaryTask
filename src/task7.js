import {isNumberInt, isNaturalNumber} from "./validator.js";
import {fibonacciSeq} from "./functions.js"

export function fibonacci(min,max,length) {
    let msg = {
        status: "",
        reason: ""
    };
    let context = {"min": isNumberInt(min), "max": isNumberInt(max), "length": isNumberInt(length)};
    let start;
    let end;
    if (!length){
        length = 0;
    }
    if ((isNaturalNumber(min))
        && (isNaturalNumber(max))
        && (isNaturalNumber(length))){

    if (context.length > 0) {
        start = Math.pow(10,context.length)/10;
        end = Math.pow(10,context.length)-1;
        return fibonacciSeq(start, end);
    } else {
        if (context.min > 0 && context.max > 0 && context.max > context.min) {
            start = context.min;
            end = context.max;
            return fibonacciSeq(start, end);
        }
    }
    }
    msg.status = "failed";
    msg.reason = "Enter a valid value. Example: ​​for calculate the range values: min: 10 и max: 20, " +
        "and for calculating the numbers of the specified length - value: length 2 ";
    return JSON.stringify(msg);

}


