var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');  
var app = express();  
app.use(cookieParser());   


/* GET home page. */
router.get('/cookie', function(req, res, next) {
  res.render('cookie');
});

module.exports = router;
