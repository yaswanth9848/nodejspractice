var express = require('express');
var router = express.Router();
const connObj  = require('../utils/SQLConnection');
const sql = require('mssql');


router.get('/getData',async  function(req, res, next) {
  connObj.connection().then(async (pool)=> {
    const tablename = 'Bikes';
    const result1 = await pool.request().query(`select * from ${tablename}`);
    console.dir(result1)
    res.render('showData', {data:result1.recordset});
  }).catch((err)=> {
    console.log(err);
  });
 
  });
  
module.exports = router;
