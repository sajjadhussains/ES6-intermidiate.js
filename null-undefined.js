//first way to get undefined
let pakhi;
console.log(pakhi);
//2nd way to get undefined
function add(num1,num2){
    console.log(num1+num2);
}
const result = add(12,13);
console.log(result);

//3rd way to get undefined

function sub(number1,number2){
    console.log(number1,number2);
}
const result1 = sub(12);
console.log(result1);
//4rth way to get undefined 

const premik ={name:"smart dude",pbook:45835};
console.log(premik.gf);
//5th way to get undefined but this is not recomended

let fun = undefined;
console.log(fun);
