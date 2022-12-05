const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection = async () =>
{
    try
    {
    await client.connect();
   // const db = client.db('node_3');
    const collection =  client.db('node_1').collection('Bikes');
    return Promise.resolve(collection);
    }catch(err){
        return Promise.reject(err);
    }

};

exports.connection = connection;