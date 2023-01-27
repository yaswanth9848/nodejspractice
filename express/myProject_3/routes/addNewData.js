var express = require('express');
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var router = express.Router();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/openForm', function(req, res, next) {
  res.render('showForm');
});

router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(req.cookies.cookie9);
    
      try {  
        var decoded = jwt.verify(req.cookies.cookie9,'sample@123');
        console.log(decoded);
        const insertResult = await (await collection).insertOne(postedData);
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
