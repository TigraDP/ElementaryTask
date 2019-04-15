import {checkNumber, checkObjFalse} from "./validator.js";

export function envelopes(envelopeOne, envelopeTwo) {
    let error = '{status: ‘failed’, reason: ‘ Введите корректное значение. Пример: Сторона а: 8, Сторона в: 12 ...}';
    //check values
    envelopeOne = {"a": parseFloat(envelopeOne.a), "b": parseFloat(envelopeOne.b)};
    envelopeTwo = {"c": parseFloat(envelopeTwo.c), "d": parseFloat(envelopeTwo.d)};
    if (checkObjFalse(envelopeOne) && checkObjFalse(envelopeTwo)) {

    //trying to put envelopes
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
    return error;
}