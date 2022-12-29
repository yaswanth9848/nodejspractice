var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.use(cookieParser());
/* GET home page. */
router.get("/",function(req,res){
  res.setHeader('set cookie','foo=bar')
   res.send("Cookie has been sent");
})
router.get('/refrigerator', function(req, res, next) {
  res.render('refrigerator', { title:'Amazon Great Indian Festival',model:'Haier',price:'16500'});
});

module.exports = router;
