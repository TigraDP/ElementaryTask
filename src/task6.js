function displayNumericSequence(rowLength,squareOfNumber){
    rowLength = naturalNumberValidation(rowLength);
    squareOfNumber = naturalNumberValidation(squareOfNumber);

    if (numericSequenceParametersValidation(rowLength,squareOfNumber)){
        return getNumericSequence(rowLength,squareOfNumber);
    } else{
        errorMessage.status = 'failed ';
        return false;
    }
}

function getNumericSequence(rowLength,squareOfNumber){
    let result = [];
    let currentLength = 0;

    for (let i = 0; currentLength < rowLength; i++){
        if (getSquareOfNumber(i,2) >= squareOfNumber){
            result.push(i);
            currentLength++;
        }
    }
    return result.toString();
}
