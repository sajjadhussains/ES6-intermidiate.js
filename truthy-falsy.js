// const age = 4;
// if(age > 0)
// {
//     console.log('condition is true');
// }
// else{
//     console.log('condition is not true');
// }
// 
// const age = 0; "0 means falsy in javascript"
const name ="Solaiman"
if(name)   //if we give (name.length) then it will be true also,(name)
{
    console.log('condition is true');
}
else{
    console.log('condition is not true');
}
//empty string is false...but some value in string is true
const name1="";
if(name1)
{
    console.log("you are right ");
}
else{
    console.log("you are not right ");
}

//undefined 
let habul;
console.log(habul);
if(habul){
    console.log("i am habul");
}
else{
    console.log('i am not habul');
}

// all the false values and trutht values is given bellow:
        //Truthy---
        //1.let name =[];
        //2.let name={};
            //False
            // 0
            //""
            //undefined
            //null
            //Nan
            //let name =false;

