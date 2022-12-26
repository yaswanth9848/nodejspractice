var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/getData',async  function(req, res, next) {
    // code here to connect database and get data from collection.
 const data = await (await collection).find().toArray();

  res.render('showData', {data});
});

router.get('/getData',async  function(req, res, next) {
  // code here to connect database and get data from collection.
  const queryData = req.query;
const data = await (await collection).find({FuelType:queryData.Petrol}).toArray();
res.render('showData', {data});
});


router.post('/addData',async  function(req, res, next) {
  // code here to connect database and get data from collection.
const postedData = req.body;
try{
  const insertResult = await (await collection).insertOne(postedData);
  const data = await (await collection).find().toArray();
  res.render('showData', {data});
  
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
  res.render('showData', {data});
  
}
catch(err)
{
   res.status(500).send('Error in deletion');
}
});

module.exports = router;
