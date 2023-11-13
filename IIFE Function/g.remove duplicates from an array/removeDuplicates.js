const removeDuplicate = (function(array){
    const unique =[];
    array.forEach((value,ind)=> {
        if (!unique.includes(value)){
            unique.push(value);
        };
    });
    return unique;

})(["Apple","Lemon","Mango","Grapes","Banana","Orange","Mango","Lemon","Apple"]);
console.log(removeDuplicate);
