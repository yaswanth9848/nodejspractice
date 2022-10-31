 
const b = "Ram";
try{
    if (b == 10)
    {
        console.log("Both are same");
    }
    else 
    {
        console.log("Both are not Same");
    }
}
catch(err)
{
    console.log("exception handled");
}
finally
{
    console.log(b);
}

//2.
a = 5;
try{
    for(i =0;i<a;i++)
    {
        console.log(i);
    }
}
    catch(err) 
    {
          console.log("exception Handled");
    }
    finally{
        console.log(i);
    }