const sumOfArray = (array) => {
    let sum = (array.reduce((acc,val)=>{
        return acc+val;
    },0));
    return sum;
};

let array = [1,2,3,4,5,6,7,8,9,10];
let sum = sumOfArray(array);
console.log(`The sum of array is ${sum}`);
