let num1=20;

for(let i=1;i<=num1;i++)
{
    let count=0;
    for(let j=1;j<=num1;j++)
    {
        if(i%j==0)
        {
         count++;
        }
    }

    if(count==2)
    {
        console.log(i,"is prime")
    }
    else
    {
        console.log(i,"not prime")
    }
}

