import {checkNumber, checkObjFalse} from "./validator.js";
import {sumOfDigits} from "./mathFunctions.js";

export function  luckyTickets (min, max){
    let error = '{status: ‘failed’, reason: ‘ Введите корректное значение. Пример: Значение min: 111111, Значение max: 222222}';
    //get context object
    let context = {"min": checkNumber(min), "max": checkNumber(max)};
    //check object`s values
    if (checkObjFalse(context) === false){
        return error;
    }
    //check tickets number length
    else if (String(context.min).length !== 6 || String(context.max).length !== 6){
        return error;
    }
    else {
        let methodOne = 0,
            methodTwo = 0,
            sumEven,
            sumOdd,
            result,
            value,
            leftPart,
            rightPart;

        for (let i = context.min; i < context.max; i++){
            value = String(i);
            //first method
            leftPart = Number(value.substring(0,3));
            rightPart = Number(value.substring(3,6));
            if (sumOfDigits (leftPart) === sumOfDigits (rightPart)){
                methodOne = methodOne + 1;
            }
            //second method
            sumEven = 0;
            sumOdd = 0;
                for(let j = 0; j < value.length; j++){
                    let numFromString = Number(value[j]);
                    if(numFromString % 2 === 0){
                    sumEven = sumEven + numFromString;
                    }
                else{
                     sumOdd = sumOdd + numFromString;
                    }
                }
                if (sumEven === sumOdd){
                    methodTwo = methodTwo + 1;
                }
        }

        result = {"winnerMethod": 0, "methodOneQnt": methodOne, "methodTwoQnt": methodTwo};
        //check method`s value
        if (result.methodOneQnt === 0 || result.methodTwoQnt === 0){
            return error;
        }
        //compare methods
        else if (methodOne > methodTwo){
            result.winnerMethod = 1;
        }
        else{
            result.winnerMethod = 2;
            }
        return JSON.stringify(result);
    }
}

    