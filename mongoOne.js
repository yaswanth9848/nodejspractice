const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection = async () =>
{
    await client.connect();
   // const db = client.db('node_3');
    const collection =  client.db('node_3').collection('employee');
    
    
        await collection.insertOne({name:'Ram',Age:22,city:'Banglore'});
        //await collection.insertOne({_id:1 });//duplicate  
        return `Insertion Successful` 
};
connection().then((result) =>
{
console.log(`Program Successful ${result}`);

}).catch((error) =>
{
    console.log(`Error worth logging ${error}`);
   /* if(error instanceof MongoServerError)
    {
        console.log(`Error worth logging ${error}`);
    }
    throw error;*/
});