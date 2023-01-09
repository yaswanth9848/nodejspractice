var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/adminLogin', function(req, res, next) {
  res.render('adminLogin',{error:null});
});

router.post('/adminLogin',async function (req,res,next)
{

  const {email,password} = req.body;
  console.log(email,password);
  try {
      const data = await (await collection).findOne({email : email});
      const data1 = await (await collection).find().toArray();
      if (!data.email ) 
      return res.status(400).send("email not found");

      if(data.password === password){
        const token = jwt.sign({user:email}, 'sample@123');
        res.cookie('cookie9',token,{maxAge:60000});
        console.log(token);        
        res.render('adminData', {data:data1});
        return;
      }else {
        return res.render('adminLogin',{error:'Incorrect credentials'});
      }       
  }catch(err)
  {
    res.status(500).send('Admin Login Fail');
  }
});

module.exports = router;
