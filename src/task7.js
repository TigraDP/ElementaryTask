import {checkNumber} from "./validator.js";
import {fibonacciSeq} from "./mathFunctions.js"

export function fibonacci(min,max,length) {
    let error = '{status: ‘failed’, reason: ‘ Введите корректоное значение. ' +
        'Пример: для вычисления диапазона введите значения min: 10 и max: 20, а для' +
        'вычисления чисел указанной длинны значение length‘}';
    let start, end;
    //get context object
    let context = {"min": checkNumber(min), "max": checkNumber(max), "length": checkNumber(length)};
    //check object`s values
    if (context.length !== false && context.min !== false && context.max !== false) {
        return error;
    }
    else{
        if (context.length !== false && context.min !== false && context.max === false) {
            return error;
        }
        else {
            if (context.length !== false && context.min === false && context.max !== false) {
                    return error;
            }
            else {
                //check context length value
                if (context.length === false) {
                    // heck context min and max values
                    if (context.min === false || context.max === false) {
                        return error;
                    }
                    //get fibonacci sequence from min max
                    else {
                        start = context.min;
                        end = context.max;
                        length = null;
                        return fibonacciSeq(start, end, length);
                    }
                }
                //get fibonacci sequence from length
                else {
                    start = null;
                    end = null;
                    length = context.length;
                    return fibonacciSeq(start, end, length);
                }
            }
        }
    }
}




    
