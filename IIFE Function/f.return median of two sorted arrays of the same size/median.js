const itsMedian = (function (array1,array2) {
    
    let array = [...array1,...array2];
    array.sort(function(a,b) {return a-b});
    let index1 = Math.floor((array.length/2)-1);
    let index2 = Math.floor(array.length/2);
    let median = ((array[index1])+(array[index2]))/2;

    return median;

})([1,12,15,26,38],[2,13,17,30,46]);
console.log(itsMedian);
