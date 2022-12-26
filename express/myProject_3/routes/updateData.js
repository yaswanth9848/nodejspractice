var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET home page. */
router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({name:name});
  res.render('showUpdateForm',{dataToBeUpdated:data});
});

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.capacity);

    try{
      const updateResult = await (await collection).updateOne({name:postedData.name},{$set:{company:postedData.company,FuelType:postedData.FuelType,capacity:postedData.capacity}});
      const data = await (await collection).find().toArray();
      res.render('showData', {data});
    }
    catch(err)
    {
        console.log(err);
       res.status(500).send('Error in insertion');
    }
    });
  
module.exports = router;
