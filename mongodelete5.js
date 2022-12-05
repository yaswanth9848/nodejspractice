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
            collection.deleteMany({college:"khit"});
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
