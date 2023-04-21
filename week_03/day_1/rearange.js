let arr2 = [2,3,4,6,5,1,8];
let arr3 = [];
for(let i=0;i<arr2.length;i++)
{
    if(arr2[i]%2==0)
    {
        arr3.push(arr2[i]);
    }
}
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2!==0)
    {
      arr3.push(arr2[i])
    }
   
}
console.log(arr3);
    		
