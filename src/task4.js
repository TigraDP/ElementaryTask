function findPalindrome(palindromeCheckValue){

    if (!naturalNumberValidation(palindromeCheckValue)) {
        errorMessage.status = 'failed ';
        errorMessage.reason = 'Enter a valid value. Example: 1234437';
        return false;
    } else {
        return findMaximumPalindrome(palindromeCheckValue);
    }
}

function findMaximumPalindrome(data){
    let checkValue;
    let reverseCheckValue;
    let currentValue;
    let result = [];

    for (let i = 0; i < data.length; i++){
        currentValue = data.substring(i);

        for (let j = 0; j < currentValue.length - 1; j++){
            checkValue = currentValue.substring(0, currentValue.length - j);
            reverseCheckValue = reverseString(checkValue);

            if (checkValue === reverseCheckValue){
                result.push(checkValue);
            }
        }
    }
    if (result.length > 0){
        result = arrSortingByMaximum(result);
        return result[0];
    }
    return "0";
}