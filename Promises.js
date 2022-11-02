// Promises
//1. Program to find num is even or odd
const promiseOne = (num) =>
{
    return new Promise((resolve1,reject1) =>
    {
    if(num%2===0)
    {
          resolve1(`num is even`);
    }
    else
    {
        reject1(`num is odd`);
    }
}
)}
promiseOne(20).then((result) =>
{
 console.log(result);
}).catch((err)=>
{
 console.log(err);
})

//2.Printing 1 to 10 numbers

const promiseTwo = (num1) =>
{
    return new Promise((resolve2,reject2) =>
    {
        try
        {
    for(i =0;i<num1;i++)
    {
    resolve2(i)
    }
       }
       catch(err)
    {
        reject2("Please enter correct input")
    }
    
    })
}
promiseTwo(10).then((result) =>
{
    console.log(result);
}).catch((err) =>
{
    console.log(err);
})


//3.square of the given numbers
const promiseThree = (arr) =>
{     
    return new  Promise((resolve3,reject3) =>
    {
   try{
    for(i =0;i<arr.length;i++)
    {
        arr[i] = arr[i] * arr [i];
    }
    resolve3(arr);
    }
    catch(err)
    {
    reject3(`Exception has Occured : ${err}`)
    }
})
}
promiseThree([1,2,3,4,5]).then((result) =>
{
    console.log(result);
}).catch((err) =>
{
    console.log(err)
})

//4. Program to add array index value using try catch block
const promiseFour = (arr) =>
{
    return new Promise((resolve4,reject4) =>
    {
        try
        {
            for(i =0;i<arr.length;i++)
            {
                arr[i] = arr[i] + 10 ;
            }
            resolve4(arr);
        }
        catch(err)
        {
            reject4(err)
        }
    })
}
promiseFour([10,20,30,40]).then((result) =>
{
console.log(result);
}).catch((err) =>
{
    console.log(err);
})

//5.Program to find greatest of three numbers
const promiseFive = (num1,num2,num3) =>
{

     return new Promise((resolve5,reject5) =>
     {
        try
        {
            if(num1>num2  && num1>num3)
            {
                resolve5("num1 is greater");
            }
            else if(num2>num3 && num2>num1)
            {
                resolve5("num2 is greater");
            }
            else
            {
                reject5("num3 is greater");
            }

            
        }
         catch(err)
        {
           reject5("Please Enter Valid Numbers");
       }   
     })    

}
promiseFive(50,70,200).then((result) =>
{
  console.log(result);
}).catch((err) =>
{
    console.log(err);
})
//6. Using shift
promiseSix = (arr,arr1) =>
{
      return new Promise((resolve6,reject6) =>
      {
             arr1 = arr.shift();
             resolve6(arr1);
             reject6(error);
      })

}
promiseSix(["Bhargav","Ravi","Kiran","Ganesh"]).then((result) =>
{
  console.log(result);
}).catch((err) =>
{
    console.log(err);
})


//7. program on reversing a string
const promiseSeven = (str) =>
{
    return new Promise((resolve7,reject7) =>
    {
           strSplit = str.split('');
           console.log(strSplit)
           strRev = strSplit.reverse();
           console.log(strRev)
           strJoin = strRev.join('')
           console.log(strJoin)
    
           resolve7(strJoin);
           reject7(error)
    })
       
}
promiseSeven("Ramu").then((result) =>
{
    console.log(result);
}).catch((err) =>
{
    console.log(err);
})

//8. tostring
const promiseEight = (str1) =>
{
     return new Promise((resolve8,reject8) =>
     {
        if(str1!=0)
        {
            console.log(`The type of given data is  ${typeof str1}`)
            res= str1.toString()
        }
     resolve8(`After converting, the type is ${typeof res}`)
     reject8("please enter correct data");
})
}

promiseEight(10).then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
})
//9 . program on unshift
const promiseNine =(Array) =>
{
    return new Promise((resolve9,reject9) =>
    {
         res = Array.unshift()
         resolve9(res)
         reject9(error)
    })
}
promiseNine([10,20,30,40,50]).then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
})
//10 splice
const promiseTen = (Arr2) =>
{
    return new Promise((resolve10,reject10) =>
    {
        try
        {
        res = Arr2.splice(1,1,30)
        resolve10(res)
        }
        catch(err)
        {
        reject10(err)
        }

    })

}
promiseTen([100,200,300,400,500]).then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
})

