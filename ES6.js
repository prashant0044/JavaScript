// function mul(a,b){
//     return a*b;
// }

// 1. const mul=(a,b)=>a*b;
// 2. const mul=(a,b)=>{return a*b;}
// 3.const name=()=>'prashant';

// Destructuring Arrays in JS
const numbers=[1,2,3];
const [f,s,t]=numbers;
console.log(f,s,t);

// Destructuring Objects in JS
const {Name,Age}={Name:'Prashant',Age:20};
console.log('My name is ',Name, 'and my age is ',Age);