let arr="0345";
let flag=false;
for(let i=0;i<arr.length;i++){
  if(arr[0]==0){
       flag = true;
  }
}
if(flag==true){
   console.log("Not Duck Number");
}else{
  console.log("Duck Number");
}
