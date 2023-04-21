let arr=[1,2,3,2,4,3,4];
let result=[];

for(let i=0;i<=arr.length;i++)
{
     result[i]=0;
 
}
for(let i=0;i<arr.length;i++){
   result[arr[i]]+=1;
   
}

for(let i=0;i<result.length;i++)
{
    if(result[i]>1)
    {
       console.log(i);
    }
}
