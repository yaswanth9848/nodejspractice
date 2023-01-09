var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
var router = express.Router();


/* GET home page. */
router.get('/adminRegister', function(req, res, next) {
    
  res.render('adminRegister');
});
router.post('/adminRegister', async function(req, res, next) {
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

module.exports = router;