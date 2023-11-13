const isOdd = (function (upto) {
    OddNumberArray = [];
    for(i=0;i<=upto;i++){
        if (i%2!==0){
            OddNumberArray.push(i);
        }
    }
    return OddNumberArray;
})(20);

console.log(isOdd);













