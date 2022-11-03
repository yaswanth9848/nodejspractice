// Programs on Promises using Objects
//1.Using for Loop
const promiseOne =  new Promise((resolve1,reject1) =>
    {
    setTimeout(() => 
    {
        try
        {
         num = 10;
        for(i =0;i<num;i++)
        console.log(i)
        resolve1(i)
        }
    
    catch(err)
    {
        reject1(err)
    }
       
    },1000) 
})

promiseOne.then((result) =>
{
  console.log(result);
}).catch((err) =>
{
   console.log(err);
})

//2. Using Arrays
const promiseTwo =  new Promise((resolve2,reject2) =>
   {
      setTimeout(() =>{
        try
        {
            arr = [1,2,3,4,5]
            for(i =0;i<arr.length;i++)
            {
            arr[i] = arr[i]*arr[i]*arr[i];
            console.log(arr[i]);
            }
            resolve2(arr[i]);
        }
        catch(err)
        {
            reject2(err);
        }
      },2000)
   })

promiseTwo.then((result) =>
{
    console.log(result);
}).catch((err) =>
{
    console.log(err);
})

//3. program on  Greatest on three numbers

const promiseThree = new Promise((resolve3,reject3) =>
{
    setTimeout(() =>{
        try
        {
            const num1 =10;
            const num2 = 20;
            const num3 = 5;
            if(num1>num2 && num1>num3)
            {
                resolve3("num1 is greater");
            }
            else if (num2>num1 && num2>num3)
            {
                resolve3("num2 is greater");
            }
            else
            {
                resolve3("num3 is greater");
            }
        }

        catch(error)
        {
            reject3("Please enter correct numbers");
        }
        

    },2200)
})
promiseThree.then((result) =>
{
    console.log(result);
}).catch((err) =>
{
  console.log(err)
})

// 4. Replacing string
const promiseFour = new Promise((resolve4,reject4) =>
{
setTimeout(() =>{
    try
    {
        const arr = [10,20,30,40,50]
        const b = arr.length
        resolve4(`The array length is ${b}`)
    }
    catch(err)
    {
        reject4(err);
    }
},4000)
})
promiseFour.then((result) =>
{
    console.log(result);
}).catch((err) =>
{
    console.log(err)
})
//5. Using shift
promiseSix = new Promise((resolve5,reject5) =>
{
        setTimeout(() =>
         {
            try
            {
               const  a = ["Realme","Redmi","Moto","Samsung"]
               const b = a.shift();
               resolve5(b)
            }
            catch(err)
            {
                reject5(err)
            }

         },5000)
})


promiseSix.then((result) =>
{
  console.log(result);
}).catch((err) =>
{
    console.log(err);
})

