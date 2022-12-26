var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
var router = express.Router();


/* GET home page. */
router.get('/register', function(req, res, next) {
    
  res.render('register');
});
router.post('/register', async function(req, res, next) {
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