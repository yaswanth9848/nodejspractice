var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

router.get('/adminData', function(req, res, next) {
  
  res.render('adminData');
});


router.post('/adminData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(req.cookies.cookie9);
    
      try {  
        var decoded = jwt.verify(req.cookies.cookie9,'sample@123');
        console.log(decoded);
        const insertResult = await (await collection2).insertOne(postedData);
        console.log(insertResult);
        const data = await (await collection).find().toArray();
        const data1 = await (await collection2).find().toArray();
        res.render('adminData', {data:data,data:data1});
        }
        catch(err) {
          console.error(err);
          res.redirect('/adminLogin');
      }
    });
  
module.exports = router;
