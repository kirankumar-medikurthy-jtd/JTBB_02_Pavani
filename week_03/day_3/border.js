let arr=[[1 ,3 ,4],[6 ,3 ,2],[9 ,2 ,10]] ;
let bag="";
for(let i=0;i<arr.length;i++){
       for(let j=0;j<arr.length;j++){
         if(j==0||arr.length-1==i){
           bag+=arr[i][j]+" ";
         }
       }
}

for(let i=arr.length-2;i>=0;i--){
    for(let j=0;j<arr.length-2;j++){
      bag+=arr[i][2]+" ";
    
   }
}
for(let i=1;i<arr.length-1;i++){
   bag+=arr[0][i]+" ";
}
console.log(bag);
