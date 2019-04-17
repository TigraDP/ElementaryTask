import {arrayStringToArray, isNumberFloat} from "./validator.js";
import {trianglesSqrt, compareS} from "./functions.js";

export function trianglesSort(trianglesArr) {
    let msg = {
        status: "",
        reason: ""
    };
    let trianglesSqrt = [];
    let result = [];

    trianglesArr = arrayStringToArray(trianglesArr);

    if (trianglesArr){
        trianglesSqrt = getTrianglesSqrt(trianglesArr);

        if (trianglesSqrt){
        trianglesSqrt.sort(compareS);

        for (let i = 0; i < trianglesSqrt.length; i++){
            result.push(trianglesSqrt[i].vertices);
        }
        return result;
        }
        msg.status = "failed";
        msg.reason = "Some values ​​are not a triangle";
        return JSON.stringify(msg)
    }
    msg.status = "failed ";
    msg.reason = "Enter a valid value. Example: [{vertices: 'ABC', a: 35, b: 12, c: 30}," +
                 " {vertices: 'DEF', d: 135, e: 112, f:113}] ... ";
    return JSON.stringify(msg);
}

function getTrianglesSqrt(arr) {
    let triangles = [];
    for (let i = 0; i < arr.length; i++) {
        let vertices;
        let a;
        let b;
        let c;
        let value = [];
        let triangle = arr[i];

        for (let key in triangle) {
            if(triangle.hasOwnProperty(key)){
            value.push(triangle[key]);
            }
        }
        vertices = value[0];
        a = isNumberFloat(value[1]);
        b = isNumberFloat(value[2]);
        c = isNumberFloat(value[3]);

        if ((!a) || (!b) || (!c) || (a + b < c) || (a + c < b) || (b + c < a)) {
            return false;
        } else {
            //get triangle square
            let triangleSqrt = trianglesSqrt(a, b, c);
            triangles.push({vertices: vertices, sqrt: triangleSqrt});
        }
    }
    return triangles;
}
 