//value validators
function naturalNumberValidation(value){
    let valid = Number(value);

    if((!isNaN(valid)) && valid > 0 && Number.isInteger(valid)){
        return Math.abs(valid);
    }
    return false;
}

function floatNumberValidation(value){
    let valid = Number(value);

    if((!isNaN(valid)) && (valid > 0)){
        return valid;
    }
    return false;
}

function valueLengthValidation(context,len){
    for (let key in context){
        if (context.hasOwnProperty(key)){
            if (context[key].length !== len) {
                errorMessage.reason = 'Enter a valid value. Ticket number must be 6 digits. Example: 111111';
                return false;
            }
        }
    }
    return true;
}     

function envelopesParametersValidation(envelopeOne,envelopeTwo){
    if (!envelopeOne.a){
        errorMessage.reason = 'Enter a valid value in envelope 1 side a. Example: 10';
        return false;
    } else if (!envelopeOne.b){
        errorMessage.reason = 'Enter a valid value in envelope 1 side b. Example: 12';
        return false;
    } else if (!envelopeTwo.c){
        errorMessage.reason = 'Enter a valid value in envelope 2 side c. Example: 25';
        return false;
    } else if (!envelopeTwo.d){
        errorMessage.reason = 'Enter a valid value in envelope 2 side d. Example: 40';
        return false;
    }
    return true;
}

function isTriangle(a,b,c){
    if ((!a) || (!b) || (!c) || (a + b < c) || (a + c < b) || (b + c < a)){
        errorMessage.reason = 'Enter a valid max value. One of the values ​​is not a triangle';
        return false;
    }
    return true;
}

function objMinMaxParametersValidation(context){
    let min = naturalNumberValidation(context.min);
    let max = naturalNumberValidation(context.max);

    if (!min){
        errorMessage.reason = 'Enter a valid min value. Example: 111111';
        return false;
    } else if (!max){
        errorMessage.reason = 'Enter a valid max value. Example: 222222';
        return false;
    } else if (max <= min){
        errorMessage.reason = 'Enter a valid max value. the max value must be greater than the min';
        return false;
    }
    return true;
}

function numericSequenceParametersValidation(rowLength,squareOfNumber){
    if (!rowLength){
        errorMessage.reason = 'Enter a valid row length value. Example: 20';
        return false;
    } else if(!squareOfNumber){
        errorMessage.reason = 'Enter a valid square value. Example: 50';
        return false;
    }
    return true;
}










