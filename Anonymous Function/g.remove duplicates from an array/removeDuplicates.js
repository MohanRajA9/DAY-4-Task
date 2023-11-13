const removeDuplicate = function (array){
    const unique =[];
    array.forEach((value,ind)=> {
        if (!unique.includes(value)){
            unique.push(value);
        };
    });
    
    return unique;
};

const array =["Apple","Lemon","Mango","Grapes","Banana","Orange","Mango","Lemon","Apple"];

let unique = removeDuplicate(array);

console.log(unique);

