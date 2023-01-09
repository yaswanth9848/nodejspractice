var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/userlogout', function(req, res, next) {
  //res.clearCookie('cookie9',token);
   /* res.clearCookie('hiii','Value is 200',{maxYear:1000});
    res.clearCookie('cookie2','Yaswanth');
    res.clearCookie('cookie5','Express');
    res.clearCookie('cookie6','Express');
    res.clearCookie('cookie7','javaScript');*/
    
  res.render('userlogin');
});

router.get('/userlogout', function(req, res, next) {
   });
  
module.exports = router;
