 const rotateArray = function (array,numberOfrotation){

    for(i=0;i<numberOfrotation;i++){
        array.unshift(array.pop());
    };
    return array  ;

};
    
const array = [1,2,3,4,5,6,7,8,9];
console.log(`Input array is [${array}]`);
const k = 5;

let rotatedArray = rotateArray(array,k);

console.log(`Rotated array is [${rotatedArray}], (Rotated ${k} times)`);


