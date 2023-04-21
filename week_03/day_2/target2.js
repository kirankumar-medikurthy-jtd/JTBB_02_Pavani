let  arr = [2,3,4,6,8,1];
let   target=10;
for(let i=0;i<arr.length;i++){
   for(let j=i+1;j<arr.length;j++){
     if(arr[i]+arr[j]==target){
     	console.log(i+","+j) 
     }
   }
}

