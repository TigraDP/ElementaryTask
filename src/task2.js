import {checkNumber, checkObjFalse} from "./validator.js";

export function envelopes(envelopeOne, envelopeTwo) {
    let error = '{status: ‘failed’, reason: ‘ Введите корректное значение. Пример: Сторона а: 8, Сторона в: 12 ...}';
    //check values
    envelopeOne = {"a": checkNumber(envelopeOne.a), "b": checkNumber(envelopeOne.b)};
    envelopeTwo = {"c": checkNumber(envelopeTwo.c), "d": checkNumber(envelopeTwo.d)};
    if (checkObjFalse(envelopeOne) === false || checkObjFalse(envelopeTwo) === false) {
        return error;
    }
    //trying to put envelopes
    else {
        if (envelopeOne.a > envelopeTwo.c && envelopeOne.b > envelopeTwo.d) {
            return "Конверт 1"
        }
        else {
            if (envelopeOne.a > envelopeTwo.d && envelopeOne.b > envelopeTwo.c) {
                return "Конверт 1"
            }
            else {
                if (envelopeOne.a < envelopeTwo.c && envelopeOne.b < envelopeTwo.d) {
                    return "Конверт 2"
                }
                else {
                    if (envelopeOne.a < envelopeTwo.d && envelopeOne.b < envelopeTwo.c) {
                        return "Конверт 2"
                    }
                    else {
                        return 0
                    }
                }
            }
        }
    }
}