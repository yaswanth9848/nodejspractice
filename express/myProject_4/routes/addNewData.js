var express = require('express');
const connObj  = require('../utils/SQLConnection');
const sql = require('mssql');
var router = express.Router();



/* GET home page. */
router.get('/openForm', function(req, res, next) {
  res.render('showForm');
});

router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    
      try {  
        connObj.connection().then(async (pool)=> {
            const tablename = 'Bikes';
            const request = await pool.request();
            request.input('name',sql.nvarChar(max),postedData.name);
            request.input('company',sql.nvarChar(max),postedData.company);
            request.input('fueltype',sql.nvarChar(50),postedData.fueltype);
            request.input('capacity',sql.nvarChar(max),postedData.capacity);
            const insertData = await pool.request().query(`insert into ${tablename} (name,company,fueltype,capacity) values (postedData.name,postedData.company,postedData.fueltype,postedData.capacity)`);
           console.log(insertData);
            const result1 = await pool.request().query `select * from ${tablename}`;
            console.dir(result1);
        res.render('showData', {data:result1});
      })
    }
        catch(err) {
          console.error(err);
      }
    });
  
module.exports = router;
