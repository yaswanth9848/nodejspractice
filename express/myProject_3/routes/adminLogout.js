var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/adminLogout', function(req, res, next) {  
  res.render('adminLogin');
});

router.get('/adminLogout', function(req, res, next) {
   });
  
module.exports = router;
