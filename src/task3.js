import {arrayStringToArray} from "./validator.js";
import {compareS,trianglesSqrt} from "./mathFunctions.js";

export function trianglesSort(trianglesArr) {
    let error = "{status: ‘failed’, reason: ‘ Введите корректоное значение. Возможно одно из значений не треугольник. Пример: [{vertices: 'ABC', a: 35, b: 12, c: 30}, {vertices: 'DEF', d: 135, e: 112, f:113}, {vertices: 'GHI', g: 135, h: 112, i: 33}, {vertices: 'JKL', j: 40, k: 42, l: 43 }]'}";
    let triangles = [];
    let result = [];
    //get array from string
    trianglesArr = arrayStringToArray(trianglesArr);
    //check values
    if (trianglesArr === false) {
        return error;
    }
    else {
        //get triangle
        for (let i = 0; i < trianglesArr.length; i++) {
            let vertices, a, b, c;
            let value = [];
            let triangle = trianglesArr[i];
            for (let key in triangle) {
                value.push(triangle[key]);
            }
            vertices = value[0];
            a = parseInt(value[1]);
            b = parseInt(value[2]);
            c = parseInt(value[3]);
            //check triangle
            if (a + b < c || a + c < b || b + c < a) {
                return error;
            } else {
                //get triangle square
                let triangleSqrt = trianglesSqrt(a,b,c);
                //push vertices and square in array
                triangles.push({vertices: vertices, sqrt: triangleSqrt});
            }
        }
        //sort triangles
        triangles.sort(compareS);
        for (var i = 0; i < triangles.length; i++) {
            result.push(triangles[i].vertices);
        }
        return result;
    }
}
 