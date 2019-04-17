import {isNumberFloat} from "./validator.js";

export function envelopes(envelopeOne, envelopeTwo) {
    let msg = {
        status: "",
        reason: ""
    };

    envelopeOne = {"a": isNumberFloat(envelopeOne.a), "b": isNumberFloat(envelopeOne.b)};
    envelopeTwo = {"c": isNumberFloat(envelopeTwo.c), "d": isNumberFloat(envelopeTwo.d)};

    if ((envelopeOne.a > 0)
        && (envelopeOne.b > 0)
        && (envelopeTwo.c > 0)
        && (envelopeTwo.d > 0)){
        return getEnvelop(envelopeOne, envelopeTwo);
    }
    msg.status = 'failed ';
    msg.reason = 'Enter a valid value. Example: side a 8 , side b 12 ... ';
    return JSON.stringify(msg);
}

function getEnvelop(envelopeOne, envelopeTwo){
    if (envelopeOne.a > envelopeTwo.c && envelopeOne.b > envelopeTwo.d) {
        return "Конверт 2"
    }
    else {
        if (envelopeOne.a > envelopeTwo.d && envelopeOne.b > envelopeTwo.c) {
            return "Конверт 2"
        }
        else {
            if (envelopeOne.a < envelopeTwo.c && envelopeOne.b < envelopeTwo.d) {
                return "Конверт 1"
            }
            else {
                if (envelopeOne.a < envelopeTwo.d && envelopeOne.b < envelopeTwo.c) {
                    return "Конверт 1"
                }
                else {
                    return 0
                }
            }
        }
    }
}
