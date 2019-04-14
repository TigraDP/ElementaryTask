export function reverseString(str){
    return str.split("").reverse().join("");
}

export function sortingByMaximum(arr){
    return arr.sort(function(a,b){
        return b - a;
    });
}