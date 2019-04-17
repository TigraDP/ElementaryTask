import {sumOfDigits} from "./functions.js";
import {isNaturalNumber} from "./validator.js";

export function  getLuckyTickets(min, max){
    let msg = {
        status: "",
        reason: ""
    };
    let context = {"min": min, "max": max};

    if ((isNaturalNumber(min))
        && (isNaturalNumber(max))
        && (context.min > 0)
        && (max > 1)
        && (max > min)
        && (min.length === 6)
        && (max.length === 6)){
        return getWinnerMethod(context);
    } else{
    msg.status = "failed ";
    msg.reason = "Enter a valid value. Example: min 111111 , max 222222";
    return JSON.stringify(msg);
    }
}

function getWinnerMethod(context){
    let methodOne = 0;
    let methodTwo = 0;
    let sumEven;
    let sumOdd;
    let result;
    let value;
    let leftPart;
    let rightPart;

    for (let i = context.min; i < context.max; i++){
        value = String(i);
        leftPart = Number(value.substring(0,3));
        rightPart = Number(value.substring(3,6));

        if (sumOfDigits (leftPart) === sumOfDigits (rightPart)){
            methodOne = methodOne + 1;
        }
        sumEven = 0;
        sumOdd = 0;

        for(let j = 0; j < value.length; j++){
            let numFromString = Number(value[j]);

            if(numFromString % 2 === 0){
                sumEven = sumEven + numFromString;
            } else{
                sumOdd = sumOdd + numFromString;
            }
        }

        if (sumEven === sumOdd){
            methodTwo = methodTwo + 1;
        }
    }

    result = {"winnerMethod": 0, "methodOneQnt": methodOne, "methodTwoQnt": methodTwo};

    if (methodOne > methodTwo){
            result.winnerMethod = 1;
    } else if (methodOne < methodTwo){
        result.winnerMethod = 2;
    }
    return JSON.stringify(result);
}


    