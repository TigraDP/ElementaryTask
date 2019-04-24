function trianglesSort(trianglesArr) {
    let trianglesSqrt = [];
    let result = [];

    trianglesArr = arrayStringToArray(trianglesArr);
    console.log(trianglesArr);
    if (trianglesArr){
        trianglesSqrt = getTrianglesSqrt(trianglesArr);
        console.log(trianglesSqrt);
        
    if (trianglesSqrt){
        trianglesSqrt.sort(compareS);
        for (let i = 0; i < trianglesSqrt.length; i++){
            result.push(trianglesSqrt[i].vertices);
        }
        return result;
        } else {
            errorMessage.status = 'failed ';
        return false;
        }
    } else {
        errorMessage.status = 'failed ';
        return false;
    }
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
        a = floatNumberValidation(value[1]);
        b = floatNumberValidation(value[2]);
        c = floatNumberValidation(value[3]);

        if (isTriangle(a,b,c)){
            let triangleSqrt = trianglesSqrt(a, b, c);
            triangles.push({vertices: vertices, sqrt: triangleSqrt});
        }  else {
            return false; 
        }
    }
    return triangles;    
}
 