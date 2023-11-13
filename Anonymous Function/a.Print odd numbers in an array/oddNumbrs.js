const isOdd = function (upto) {

    for(i=0;i<=upto;i++){
        if (i%2!==0){
            OddNumberArray.push(i);
        }
    }
}

let upto = 20;
OddNumberArray = [];
isOdd(upto);
console.log(OddNumberArray);