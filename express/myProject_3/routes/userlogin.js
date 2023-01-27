var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();
const collection2  = require('../utils/mongoConnection').connection1();
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/userlogin', function(req, res, next) {
  res.render('userlogin',{error:null});
});

router.post('/userlogin',async function (req,res,next)
{

  const {email,password} = req.body;
  console.log(email,password);
  try {
      const data = await (await collection).findOne({email : email});
      const data1 = await (await collection).find().toArray();
      const adminShowData = await (await collection2).find().toArray();
      console.log(adminShowData);
      if (!data.email ) 
      return res.status(400).send("email not found");

      if(data.password === password){
        const token = jwt.sign({user:email}, 'sample@123');
        res.cookie('cookie9',token,{maxAge:60000});
        console.log(token);
        /*res.cookie('hiii','Value is 200',{maxYear:1000});
        res.cookie('cookie2','Yaswanth');
        res.cookie('cookie5','Express');
        res.cookie('cookie6','Express');
        res.cookie('cookie7','javaScript');
        res.cookie('cookie7','sample@123');*/
        
        res.render('showData', {data:data1,adminShowData:adminShowData[14]});
        return;
      }else {
        return res.render('userlogin',{error:'Incorrect credentials'});
      }       
  }catch(err)
  {
    res.status(500).send('Login Fail');
  }
});

module.exports = router;
