var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var router = express.Router();


/* GET home page. */
router.get('/userRegister', function(req, res, next) {
    
  res.render('userRegister');
});
router.post('/userRegister', async function(req, res, next) {
  const postedData = req.body;
  try{
      
    const insertResult = await (await collection).insertOne(postedData);
    const data = await (await collection).find().toArray();
    const data1 = await (await collection2).find().toArray();
    res.render('showData', {data:data});
    }
       
  catch(err)
  {
     res.status(500).send('Error in insertion');
    
  }
  });

module.exports = router;