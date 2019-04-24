function  getLuckyTickets(context){

    if ((valueLengthValidation(context,6)) && (objMinMaxParametersValidation(context))){
        return getWinnerMethod(context);
    } else {
        errorMessage.status = 'failed ';
        return false;
    }
}

function getWinnerMethod(context){
    let methodOne = 0;
    let methodTwo = 0;
    let sumEven;
    let sumOdd;
    let result;
    let currentValue;
    let leftPart;
    let rightPart;
    for (let i = context.min; i < context.max; i++){
        currentValue = i.toString();
        leftPart = Number(currentValue.substring(0,3));
        rightPart = Number(currentValue.substring(3,6));

        if (sumOfDigits(leftPart) === sumOfDigits(rightPart)){
            methodOne = methodOne + 1;
        }

        sumEven = 0;
        sumOdd = 0;

        for(let j = 0; j < currentValue.length; j++){
            let numFromString = Number(currentValue[j]);

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
    return result;
}


    