const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection = async () =>
{
    await client.connect();
    
    const collection =  client.db('node_1').collection('Bikes');
    const  result =  await collection.count({name:"Royal Enfield"});
        return result;
};
connection().then((result) =>
{
console.log(result);

}).catch((error) =>
{
    console.log(`Error worth logging ${error}`);

});
