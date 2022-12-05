const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection = async () =>
{
    await client.connect();
    
    const collection =  client.db('node_1').collection('Bikes');
    const  countresult  =  await collection.count({FuelType:"Diesel"});
        return (countresult);
};
connection().then((result) =>
{
console.log(result);

}).catch((error) =>
{
    console.log(`Error worth logging ${error}`);

});
