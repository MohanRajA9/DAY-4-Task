const titleCaps = (function(sentence){
    console.log(`Input : ${sentence}`);  
    let array = sentence.split(" ");
    for(i=0;i<array.length;i++){
         array[i] = array[i][0].toUpperCase()+array[i].substring(1);
    };
    let inTitleCaps=array.join(" ");
    return (`Output : ${inTitleCaps}`);
})("convert all the strings to title caps in a string array");

console.log(titleCaps);










