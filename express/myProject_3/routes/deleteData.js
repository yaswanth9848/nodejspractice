var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/deleteData', async  function(req, res, next) {
    const name = req.query.name;
    try {
      var decoded = jwt.verify(req.cookies.cookie9,'sample@123');
     console.log(decoded);
     const deleteResult = await (await collection).deleteOne({name});
    console.log(deleteResult);
    const data = await (await collection).find().toArray();
    res.render('showData', {data});
    }catch(err)
    {
        console.log(err)
      res.redirect('/userlogin');
      }
    });
module.exports = router;