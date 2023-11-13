const isPalindromes = (array) => {
    let final = [];
    for (let value of array){

        let string = value;
        let splitString = string.split('');
        let reverseString = splitString.reverse();
        let revWord = reverseString.join('');         
    
        if (value == revWord){
            final.push(value);
        }
    }
 return final;
};
let array = ["no","civic","pain","radar","no","level","gain","rotor"];
console.log(isPalindromes(array));
