const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection = async () =>
{
    try
    {
    await client.connect();
    const collection =  client.db('node_1').collection('Bikes');
        return Promise.resolve(collection);
    }catch(err){
        return Promise.reject(err);
    }

};

const connection1 = async () =>
{
    try
    {
    await client.connect();
    const collection2 = client.db('node_1').collection('announcement');
        return Promise.resolve(collection2);
    }catch(err){
        return Promise.reject(err);
    }

};

exports.connection = connection;
exports.connection1= connection1;
