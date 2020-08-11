const numbers =[3,4,5,6,7,8];
const output = [];
for(let i = 0; i<numbers.length; i++){
    const element =numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

//(map function)we will see it by map function---
// const numbers1 = [12,34,22,19,78];

// function square(element){
//     return element * element;
// }
// const result=numbers1.map(square);
// console.log(result);

//we can write map function also like this
const numbers2 =[3,4,5,6,7,8]
// const result1 =numbers.map(function(element){
//     return element*element;
// })
// console.log(result1);
// const square = element => element * element ;
const result1 =numbers2.map(x => x * x);
console.log(result1);


//Filter
const numbers3=[3,4,5,6,7,8,9,10];
const bigger = numbers3.filter(x => x >6);
console.log(bigger);
