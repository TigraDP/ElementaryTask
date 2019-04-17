import {isNumberInt} from "./validator.js";

export function numSeq(n,m){
    let msg = {
        status: "",
        reason: ""
    };
    let result = [];
    let len = 0;
    let rowLength = isNumberInt(n);
    let squareOfNumber = isNumberInt(m);

    if ((rowLength) &&  (squareOfNumber) && (rowLength > 0) && (squareOfNumber >0)){

        for (let i = 0; len < rowLength; i++) {
            if (Math.pow(i,2) >= squareOfNumber){
                result.push(i);
                len++;
            }
        }
        return String(result);
    } else{
    msg.status = "failed";
    msg.reason = "Enter a valid value. Example: n 25 , m 50";
    return JSON.stringify(msg);
    }
}