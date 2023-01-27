var express = require('express');
var router = express.Router();
const connObj  = require('../utils/SQLConnection');
const sql = require('mssql');
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login',{error:null});
});

router.post('/login',async function (req,res,next)
{
 const {email,password} = req.body;
 console.log(email,password);
  try {
    connObj.connection().then(async (pool)=> {
        //const tablename = 'Bikes';          
        const result = await pool.request()
        .input('email', sql.NVarChar, email)
        .input('password',sql.NVarChar, password)
        .query `select * from Bikes where email=@email and password = @password`;
        //console.log(result[0]);
        console.log(result.recordset[0].email);
      
      if (result.recordset[0].email ===undefined) 
     // return res.status(400).send("email not found");
       console.log("email not found")

      if(result.recordset[0].password === password){
        const token = jwt.sign({user:email}, 'sample@123');
        res.cookie('cookie9',token,{maxAge:60000});
        console.log(token);
        const resultOfBikes = await pool.request()
        .query `select * from Bikes `;

        res.render('loginData',{data:resultOfBikes.recordset});
        return;
      }else {
        return res.render('login',{error:'Incorrect credentials'});
      }       
  }).catch((error) => {
    console.log(error);
    res.status(500).send('LoginFail');
  })
}catch(err)
  {
    res.status(500).send('Login Fail');
  }
});

module.exports = router;
