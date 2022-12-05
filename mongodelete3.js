//1.
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const promiseOne = () =>
{
    return new Promise((resolve,reject) =>
    {
        try
        {
            client.connect();
            const collection = client.db('node_1').collection('person');
            collection.deleteMany({name:'Faiz'},{name:"Roshan kumar",age:25,college:"khit",email:"ram@gmail.com"});
            resolve(' Success')
        }
        catch(err)
        {
            reject(`Code  failed ${err}`);
            return failure
        }
    })
}
promiseOne().then((result)=>
{
    console.log(result);
}).catch((err) =>
{
console.log(err);
})
