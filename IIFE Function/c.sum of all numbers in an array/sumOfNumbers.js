const sumOfArray = (function(array){
    let sum = (array.reduce((acc,val)=>{
        return acc+val;
    },0));

    return sum;
})([1,2,3,4,5,6,7,8,9,10]);

console.log(sumOfArray);






