const isPrime = function ( array ){
let finalArray = [];
    for(let value of array){
        let flag = true;
        if(value >= 2 ){
            for(i=2;i<value;i++){
                if(value%i==0){
                    flag = false;
                    break;
                  };
               };
                if(flag){
                    finalArray.push(value);  
                      };
                };
};
return finalArray;
};

let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let primeNumberArray = isPrime(array);

console.log(primeNumberArray );