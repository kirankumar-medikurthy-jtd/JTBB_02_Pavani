 let arr=[[1 ,3 ,4],
         [6 ,3, 2],
	 [9 ,2 ,10]];
let row=3;
let cols=3
let sum=0;
for(let i=0;i<row;i++){
   for(let j=0;j<cols;j++){
     if(i==j){
       sum+=arr[i][j]
     }
   }
}
for(let i=0;i<row-2;i++){
   sum+=arr[i][2];
}
for(let i=0;i<row-2;i++){
  sum+=arr[2][i]
}
console.log(sum);
