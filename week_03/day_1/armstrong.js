let a=153;
let count=0;
let b=a+"";
for(let i=0;i<b.length;i++)
{
	let x=b[i];
	count+=Math.pow(x,b.length);
}
if(count==a)
{
    console.log("armstrong")
}
else
{
    console.log("not armstrong")
}
