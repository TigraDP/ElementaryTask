function getChessboard(width,height,symbol){
    width = naturalNumberValidation(width);
    height = naturalNumberValidation(height);

    if (chessboardParametersValidation(width,height,symbol)){
        return buildChessboard(width,height,symbol);
    } else{
        errorMessage.status = 'failed ';
        return false;
    }
}

function chessboardParametersValidation(width,height,symbol){
    if (!width){
        errorMessage.reason = 'Enter a valid width value. Example: 16';
        return false;
    } else if (!height){
        errorMessage.reason = 'Enter a valid height value. Example: 8';
        return false;
        } else if (symbol.length === 0){
        errorMessage.reason = 'Enter a valid symbol value. Example: *';
        return false;
    }
    return true;
}

function buildChessboard(boardWidth,boardHeight,boardSymbol){
       let result = "";

       for (let i = 0; i < boardHeight; i++){
            for (let j = 0; j < boardWidth; j++){
                if ((i+j) % 2 === 0){
                    result = result + boardSymbol;
                }
                else {
                    result = result + "&nbsp";
                }
            }
            result = result + "<br>";
       }
       return result;
}


