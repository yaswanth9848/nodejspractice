var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var router = express.Router();

/* GET home page. */
router.get('/getData',async  function(req, res, next) {
    // code here to connect database and get data from collection.
res.cookie('sampleCookie','Value is 100',{maxYear:1000});
res.cookie('cookie1','Yaswanth');


    const data = await (await collection).find().toArray();
    const adminShowData = await (await collection2).find().toArray();

  res.render('showData', {data:data,adminShowData:adminShowData[1]});
});

router.get('/getData',async  function(req, res, next) {
  // code here to connect database and get data from collection.
  const queryData = req.query;
const data = await (await collection).find({FuelType:queryData.Petrol}).toArray();
const data1 = await (await collection2).find().toArray();
res.render('showData', {data:data,data:data1});
});


router.post('/addData',async  function(req, res, next) {
  // code here to connect database and get data from collection.
const postedData = req.body;
try{
  const insertResult = await (await collection).insertOne(postedData);
  const data = await (await collection).find().toArray();
  const data1 = await (await collection2).find().toArray();
  res.render('showData', {data:data,data:data1});
  
}
catch(err)
{
   res.status(500).send('Error in insertion');
}
});

router.delete('/deleteData',async  function(req, res, next) {
  // code here to connect database and get data from collection.
const deleteData = req.body;
try{
  const deleteResult = await (await collection).deleteOne(deleteData);
  const data = await (await collection).find().toArray();
  const data1 = await (await collection2).find().toArray();
  res.render('showData', {data:data,data:data1});
  
}
catch(err)
{
   res.status(500).send('Error in deletion');
}
});

module.exports = router;
