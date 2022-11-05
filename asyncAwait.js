 const promiseOne = (num) =>
{
    return new Promise ((resolve1,reject1) =>
           {
    try
    {
           
             for(let i=0;i<=num;i++)
             {
                console.log(i);
                
             }
             resolve1("success");
   }
    catch(err)
    {
        console.log('Failure')
          
        reject1( err)
    }
})
}

const result = async() =>
{
    res1 = await promiseOne(10);
    console.log(res1)
} 
result().then((res1) =>
{
console.log(res1);
}).catch((err) =>
{
    console.log(err);
})
//2.    person name and age
async function person ()
{
    let a = new Promise((resolve,reject) =>
    {
       console.log("Yaswanth")
        resolve("Yaswanth");

    })
    let b = new Promise((resolve,reject) =>
    {
        age = 20;
        console.log("Age is "+age)
        resolve(age);
    })
   let A = await a

   return A

}
person()

//3. square the array numbers
async function sqr() 
 {
    let a = new Promise((resolve1,reject1) =>
    {
     arr = [10,20,30,40]
     for(i=0;i<arr.length;i++)
     {
     arr[i] = arr[i]*arr[i];
     console.log(arr[i]); 
     } 
     resolve1("First Part")
    })
}
sqr()
//4.Palindrome
  promiseFour =() =>
{ 
    return new Promise((resolve4,reject4) =>
    {
    const a = "MOM";
    console.log("The new string is "+" " +a);
    strsplit=a.split('')
    console.log("The splitted string is" +" "+strsplit);
    strReverse=strsplit.reverse();
    console.log("The Reversed string is "+" "+strReverse);
    strJoin=strReverse.join('');
    console.log("The Joined string is "+" "+ strJoin)
    if(a===strJoin)
    {
        console.log("it is a palindrome");
    }
    else
    {
        console.log("it is not a palindrome");
    }
})
    
}

promiseFour()
//5.program on toString
const promiseFive =(arr) =>
{
    return new Promise((resolve,reject) =>
    {
          if(arr!=null)
          {
           const  arr1 = arr.toString()
           console.log(arr1);
            resolve(arr1);
          }
          else
          {
             console.log("Error")
          }
    })
    result = async() =>{
    res1 = await   promiseFive() 
    console.log(res1);

    } 
}
promiseFive([10,20,30,40,"Java"]);

//6. Adding

  function1=(a,b)=>{
    setTimeout(() => {
        res =(a+b);
        console.log(res)
    }, 1000)
}
 add=async()=>{
     res1= await function1(10,30);
    console.log(res1);
}
add();

//7.
async function Weather(degree){
    try{
        const data= await Promise.resolve(`Temp is ${degree}`);
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
    }

Weather(27)