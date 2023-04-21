let str="pavani@123"
let num="0123456789"
let alpha="abcdefghijklmnopqrstuvwxyz";
let symbols="~!@#$%^&*";
let count=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<num.length;j++){
    if(str[i]==num[j]){
      count++
    }
  }
}
let count1=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<alpha.length;j++){
    if(str[i]==alpha[j]){
      count1++
    }
  }
}
let count2=0;
for(let i=0;i<str.length;i++){
  for(let j=0;j<symbols.length;j++){
    if(str[i]==symbols[j]){
      count2++
    }
  }
}
//console.log(count2);
if(count>0&&count1>0&&count2>0){
  console.log("alphanumeric")
}
else
{
  console.log("not a alpha numeric")
}
