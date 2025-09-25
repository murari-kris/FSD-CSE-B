import {add,mul} from "./jsdemo1.js";
console.log("sum=",add(23,45));
console.log("sum=",mul(23,45));

const num=[1,2,3,45,6,7];
const even=num.filter((n)=>(n%2===0))
           .map((n)=>(n*n))
           .reduce((n,count)=>(n+count),0);
console.log(even);
