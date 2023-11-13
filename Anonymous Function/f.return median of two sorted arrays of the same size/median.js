const medianOfTwoSortedArray = function (array1,array2) {

    let array = [...array1,...array2];
    array.sort(function(a,b) {return a-b});
    let index1 = Math.floor((array.length/2)-1);
    let index2 = Math.floor(array.length/2);
    let finalValue = ((array[index1])+(array[index2]))/2;

return finalValue;
}

let array1 = [1,12,15,26,38];
let array2 = [2,13,17,30,46];

let median = medianOfTwoSortedArray(array1,array2);

console.log(`The Median of The Two Sorted Arrays is ${median}`);
