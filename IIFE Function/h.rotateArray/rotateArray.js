const rotateArray = (function(array,numberOfRotation){
    console.log(`Input array is [${array}]`);
    for(i=0;i<numberOfRotation;i++){
        array.unshift(array.pop());
    };
    return array;
})([1,2,3,4,5,6,7,8,9],5);
console.log(`Rotated array is [${rotateArray}]`);

