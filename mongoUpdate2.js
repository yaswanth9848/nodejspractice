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
            const collection = client.db('node_3').collection('employee');
            collection.updateOne({college:"Kits"},{$set:{Branch:"ECE"}});
            resolve('Update Success')
        }
        catch(err)
        {
            reject(`Code Update failed ${err}`);
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