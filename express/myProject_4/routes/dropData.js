var express = require('express');
var router = express.Router();
const connObj  = require('../utils/SQLConnection');
const sql = require('mssql');

/* GET home page. */
router.get('/dropData', function(req, res, next) {
  res.render('dropData',{error:null});
});

router.post('/dropData',async function (req,res,next)
{
    const {company,fueltype}= req.body; 
    console.log(company,fueltype);
  try {
    connObj.connection().then(async (pool)=> {
        const result = await pool.request()
        .input('company', sql.NVarChar, company)
        .input('fueltype', sql.NVarChar, fueltype)
        .query `select * from Bikes where company = @company and fueltype = @fueltype`;
        console.log(result.recordset[0].company , result.recordset[0].fueltype);
        console.log(result);
        if(result.recordset !== null && result.recordset !== undefined)
        {
          // console.log(result.recordset[0].company , result.recordset[0].fueltype)
          res.render('dropData',{data:result.recordset});
       }
        else
        {
          res.send ("Please select correct data");
        }
    }).catch((err) =>
    {
          console.log(err);
    })
}catch(err)
    {
     console.log(err)   
    }
})

module.exports = router ;