function compareEnvelopes(envelopeOne, envelopeTwo){
    envelopeOne = {"a": floatNumberValidation(envelopeOne.a), "b": floatNumberValidation(envelopeOne.b)};
    envelopeTwo = {"c": floatNumberValidation(envelopeTwo.c), "d": floatNumberValidation(envelopeTwo.d)};

    if (envelopesParametersValidation(envelopeOne,envelopeTwo)){
        return getEnvelop(envelopeOne, envelopeTwo);
    } else {
        errorMessage.status = 'failed ';
        return false;
    }
}

function getEnvelop(envelopeOne, envelopeTwo){
    if (envelopeOne.a > envelopeTwo.c && envelopeOne.b > envelopeTwo.d){
        return "Конверт 2";
    } else if (envelopeOne.a > envelopeTwo.d && envelopeOne.b > envelopeTwo.c){
            return "Конверт 2";
    } else if (envelopeOne.a < envelopeTwo.c && envelopeOne.b < envelopeTwo.d){
                return "Конверт 1";
    } else if (envelopeOne.a < envelopeTwo.d && envelopeOne.b < envelopeTwo.c){
        return "Конверт 1";
    }
    return "0";
}
            
        
    

