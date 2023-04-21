let arr=[[1 ,3,  4],[6, 3 ,2], [9, 2 ,10]] ;
let row=3;
let cols=3;
let bag="";
for(let i=0;i<row;i++){
   bag+=arr[0][i]+" ";
}
for(let i=0;i<row;i++)
{
     for(let j=1;j<cols-1;j++){
       if(i+j==2){
         bag+=arr[i][j]+" ";
      }
    }
}
for(let i=0;i<row;i++){
   bag+=arr[row-1][i]+" ";
}
console.log(bag);
