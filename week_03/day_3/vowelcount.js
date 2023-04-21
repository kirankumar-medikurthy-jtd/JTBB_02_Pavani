let str="jtbfoundation";
let flag=false;
let count=0;
let count1=0;
for(let i=0;i<str.length;i++){
   if(str[i]=="a"||str[i]=="e"||
      str[i]=="i"||str[i]=="o"||str[i]=="u")
   {
     flag=true;
     count++;
   }
    else{
      count1++;
    }
  }
 console.log("vowels : "+count);
 console.log("Consonents : "+count1);

