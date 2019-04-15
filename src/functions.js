export function reverseString(str){
    return str.split("").reverse().join("");
}

export function arrSortingByMaximum(arr){
    return arr.sort(function(a,b){
        return b - a;
    });
}