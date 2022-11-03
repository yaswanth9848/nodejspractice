// program on promise.all()
//promise.all() is used when array of promise's as input and to print the selected promise's
const promise1 = {name:"Ram",Age:20}
const promise2 = {name:"Amar",Age:22}
const promise3 = {name:"Kiran",Age:21}
const promise4 = new Promise((resolve,reject) =>
    {
    resolve({name:"Karthik",Age:24})
    })

Promise.all([promise1,promise2,promise4]).then((result) =>
{
    console.log(result);
})
