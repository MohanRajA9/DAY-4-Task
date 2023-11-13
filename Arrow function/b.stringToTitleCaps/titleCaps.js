const titleCaps = (sentence) => {
    console.log(`Input : ${sentence}`); 
    let array = sentence.split(" ");
    for(i=0;i<array.length;i++){
        array[i] = array[i][0].toUpperCase()+array[i].substring(1);
   }
   return array.join(" ");
}
let inTitleCaps = titleCaps("convert all the strings to title caps in a string array");
console.log(`Output : ${inTitleCaps}`);
