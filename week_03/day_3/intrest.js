let Principle = 1000;
let Rate = 15 ;
let Time = 3;
//simple Intrest formula
let simple=(Principle*Rate*Time)/100;
//componend formula
let componend=Math.floor(Principle*(Math.pow((1+Rate/100),Time))-Principle);
console.log(simple);
console.log(componend);


