var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/refrigerator', function(req, res, next) {
  res.render('refrigerator', { title:'Amazon Great Indian Festival',model1: '1.LG 190 L 5 Star Smart Inverter Direct-Cool Single Door Refrigerator (GL-D201ASCZ, Scarlet Charm, With Base stand with Drawer & Fast Ice Making)',capacity1:'220 litres',color1:'Ice Blue'})});

module.exports = router;
