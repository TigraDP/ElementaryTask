import {isInteger} from "./validator.js";

export function getChessboard(width,height,symbol){
    const error = {
        status: "failed",
        reason: "Enter a valid value. Example: width 8, height 8, symbol *"
    };

     width = parseInt(width);
     height = parseInt(height);

    if ((isInteger(width)) && (isInteger(height))&& (symbol !== '') && (width > 1) && (height > 1)){
        return buildChessboard(width,height,symbol);
        }
    return "status:" + " " + error.status + "; " + "reason:" + " " + error.reason;
}

function buildChessboard(boardWidth,boardHeight,boardSymbol){
       let result = "";

       for (let i = 0; i < boardHeight; i++){
            for (let j = 0; j < boardWidth; j++){
                if (i%2 === 0 && j === 0){
                    result = result + '&nbsp' + boardSymbol + '&nbsp';
                }
                else {
                    result = result + boardSymbol + '&nbsp';
                }
            }
            result = result + '<br>';
        }
       return result;
}


