var express = require('express');
var router = express.Router();

/* GET home page. */

router.use('/',(req, res, next)=>{
  console.log("Server is running successfully");
 next();
});

router.get('/',function(req, res, next){
  console.log('Mobiles Page');
  next();
});
  
router.get('/mobiles', function(req, res, next) {
  res.render('mobiles', { title: 'Mobiles' ,model:'Realme9',color:'Black',Price:'15500'});
});

module.exports = router;
