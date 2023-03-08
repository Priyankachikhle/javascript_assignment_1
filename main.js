var a = 1;
console.log(a, typeof a);

var namey = 'priyanka';
console.log(namey, typeof namey); 

var bool = true;
console.log(bool, typeof bool);

var  nullvar= null;
console.log(nullvar, typeof nullvar);

var condition = undefined;
console.log(condition, typeof condition); 

var vol = Symbol();
console.log(vol, typeof vol);


var age = 18; 

if(age > 18){
    console.log("User is eligible to vote");
}
else{
    console.log("User is not eligible to vote");
}

function add(number)
{
    var result = number + 1 ;
    
    console.log(result);
    return result;
}
add(10);

var Alphabet = ["A", "B", "C", "D", "E", "F", "G" , "H" , "I", "J", "K", "L", "M", "N", "O", "P", "Q" , "R", "S", "T"];

for(var i = 0; i < Alphabet.length; i++){
    console.log(Alphabet[i]);
}

var Planguage = ["C", "C++", "HTML", "CSS", "PHP"];
Planguage.push("JAVA");
Planguage.unshift("JAVASCRIPT");
Planguage.pop();
Planguage.shift();
console.log(Planguage);
