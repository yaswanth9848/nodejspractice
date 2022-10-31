// try catch
/*
try() is used to check the error in the code.if any error exists in the code, it passes to the catch block.
catch() is used to handle the error in the code.catch block executes the code only if the error is identified by the try block.
syntax for tryCatch
try
{
    Block of code 
}
catch(err)
 {
   Block of code to handle errors
 }

}*/
// 1.printing array elements
const arr = [1,2,3,4,5];

try{

for (const  i = 0; i<=arr.length;i++)
{
    console.log(arr[i]);
}
}catch(err)
{
 console.log("EXception Handling");   
}
finally 
{
    console.log(arr);
}


//2.
function add(arr2)
{
    try{
 for(i =0;i<arr2.length;i++)
 {
    console.log(arr2[i]+5);
 }   
}
catch(err)

{
    console.log("Exception Handling");
}

finally
{
    console.log(arr2[i]);
}
}
add([5,6,7,8])


/*const arr1 = [1,2,3,4];

try {
    for (const i =0; i<arr.length;i++){
        console.log(arr[i]);
    }
}catch(err) {
    console.log('Exceltion Handled');
}

const addArr = (arr) => {
    try {
        for (let i =0; i<arr.length;i++){
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    } catch(err) { // this will be skipped if no exception occurs.
        console.log('Exception handled in new function');
        return 'Exception occured';
    }

}

console.log(addArr([1,2,3,4]));
*/

//3
 
const a = [1,2,3,4]
try{
    for(const i =0; i<a.length;i++)
    {
        a[i] = a [i] +2 ;
      console.log(a[i])
    }
}
catch(err)
{
    console.log("Exception Occured");
}
    finally 
    {
       console.log(a);
    }


//4.
const b = 5;
try{
    if (b ==10)
    {
        console.log("Both are same");
    }
    else{
        console.log("Both are not same ")
    }
}
catch(err)
{
    console.log(err);
}
finally{
    console.log(b)
}

//5
const c = 10;
try
{

    while(c>5)
    {
        console.log(c);
        c++;
    }
}
catch(err)
{
    console.log("Exception Occured");
}
finally{
    console.log(c);
}