var express = require('ejs1');
var router = express.Router();

/* GET home page. */
router.get('/ejs1', function(req, res, next) {
  res.render('ejs1', { title: 'Using for Loop '});
});

module.exports = router;
