let arr = [2,3,4,6,8,1];  
let target=13;
for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
     for(let k=j+1;k<arr.length;k++){
       if(arr[i]+arr[j]+arr[k]==target){
         console.log(i,j,k);
       }
     }
   }
 }

