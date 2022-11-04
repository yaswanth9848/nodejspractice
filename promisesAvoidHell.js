//programs on promises to avoid callbackHell
//1.program on addition and subtraction
const promiseOne = (a,b) =>
{
    return new Promise((resolve1,reject1) =>
    {
        try
        {
        res = a+b;
        resolve1(res)
        }
        catch(err)
        {
            reject1(err)
        }
    })
}
promiseOne(10,20).then((result1) =>
{
    console.log(`Result for Addition is ${result1}`);
    {
        return new Promise((resolve,reject) =>
        {
      res1 = result1-5;
      console.log(`Result for subtraction is ${res1}`);
        })
    }
}).catch((err) =>
{
 console.log(err)
})


//2.program on Mul and Div
const promiseTwo = (a,b) =>
{
    return new Promise((resolve2,reject2) =>
    {
        try
        {
       const  res = a*b;
        resolve2(res)
        }
        catch(err)
        {
            reject2(err)
        }
    })
}
promiseTwo(10,20).then((result) =>
{
    console.log(`Result for Multiplication is ${result}`);
   return new Promise((resolve1,reject1) =>
    {
         res1 = result*2;
        console.log(`Result for 2nd time Multiplication is ${res1}`);
        resolve1(res1)
    })
}).then((res2) =>
{
   return new Promise((resolve,reject) =>
   {
   res2 = res1/10;
  console.log(`Result for Divison is ${res2}`);  
   }) 
}).catch((err) =>
{
 console.log(err)
})


//3
const promiseThree =  new Promise((resolve3,reject3) =>
    {
        try
        {
       const  a = 10;
       if(a==10)
       {
        console.log("Both are Same");
       }
        resolve3('same')
        }
        catch(err)
        {
            console.log("Both are not Same");
            reject3('Error')
        }
    })

promiseThree.then((result) =>
{
    console.log(`Result  is ${result}`);
   return new Promise((resolve1,reject1) =>
    {
        console.log(`Result  is ${result + " With Same Numbers"}`);
    })
}).catch((err) =>
{
 console.log(err)
})

//4 square of array numbers
const promiseFour = new Promise((resolve,reject) =>
{
    try
    {
        arr =[10,20,30,40]
        for(i=0;i<arr.length;i++)
        {
            arr[i] = arr[i]*arr[i];
            console.log(arr[i]);
        }
        resolve(arr[i]);
    }
    catch(err)
    {
        reject(err);
    }
})
promiseFour.then((result) =>
{
   console.log(result);
}).then((res2) =>
{
    return new Promise((resolve,reject) =>
    {
        res2 = arr.shift();
        console.log(res2);
        resolve(res2)
    })
    
}).catch((err) =>
{
    console.log(err)
})

//5. using shift
const promiseFive = new  Promise((resolve5,reject5) =>
    {
  arr = [100,220,310,450,500,70,44];
   arr1 = arr.splice(1,1,20);
 // console.log(arr1);
  console.log(arr);
  resolve5(arr1)
  reject5(error)
})

promiseFive.then((result) =>
{
    console.log(result);
    return new Promise((resolve5,reject5) =>
    {
       const  arr3 = arr.length
        //const arr4  = arr3.length;
        console.log(arr3)
       // resolve5(arr4);
    })
}).catch((err) =>
{
    console.log(err)
})