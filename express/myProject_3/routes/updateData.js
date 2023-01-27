var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var router = express.Router();
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({name:name});
  res.render('showUpdateForm',{dataToBeUpdated:data});
});

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(req.cookies.cookie9);

    try {
      //console.log(token);
      var decoded = jwt.verify(req.cookies.cookie9, 'sample@123');
      console.log(decoded);
      const updateResult = await (await collection).updateOne({name:postedData.name},{$set:{company:postedData.company,FuelType:postedData.FuelType,capacity:postedData.capacity}});
      const data = await (await collection).find().toArray();
      const data1 = await (await collection2).find().toArray();
      res.render('showData', {data:data});
      }
      catch(err) {
        console.error(err);
        res.redirect('/userlogin');
    }
    });
  
module.exports = router;
