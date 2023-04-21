let str="angel";
let str1="glean";
let bag="";
for(let i=0;i<str.length;i++){
   for(let j=0;j<str1.length;j++){
     if(str[i]==str1[j])
     {
       bag+=str1[j];
     }
   }
 }
 if(bag==str){
   console.log("anagram");
 }else{
   console.log("Not anagram");
 }
