let arr=[[1 ,3,  4],[6, 3 ,2], [9, 2 ,10]] ;
let row=3;
let cols=3;
let bag="";
for(let j=cols-1;j>=0;j--){
   bag+=arr[j][0]+" ";
}
for(let i=0;i<row;i++)
{
     for(let j=1;j<cols-1;j++){
       if(i+j==2){
         bag+=arr[i][j]+" ";
       }
     }
 }
for(let j=cols-1;j>=0;j--){
    bag+=arr[j][2]+" ";
}
 console.log(bag);
