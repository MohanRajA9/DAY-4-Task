const isOdd = (upto) => {
    let oddNumberArray = [];
    for(i=0;i<=upto;i++){
        if (i%2!==0){
            oddNumberArray.push(i);
        };
    };
return oddNumberArray;
};
console.log(isOdd(10));
