var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();
var cookieParser = require('cookie-parser');
router.use(cookieParser());

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login',{error:null});
});

router.post('/login',async function (req,res,next)
{

  const {email,password} = req.body;
  console.log(email,password);
  try {
      const data = await (await collection).findOne({email : email});
      const data1 = await (await collection).find().toArray();
      if (!data.email ) 
      return res.status(400).send("email not found");

      if(data.password === password){
        res.cookie('hiii','Value is 200',{maxYear:1000});
        res.cookie('cookie2','Yaswanth');
        res.cookie('cookie5','Express');
        res.cookie('cookie6','Express');
        res.cookie('cookie7','javaScript');
        res.render('showData', {data:data1});
        return;
      }else {
        return res.render('loginPage',{error:'Incorrect credentials'});
      }       
  }catch(err)
  {
    res.status(500).send('Login Fail');
  }
});

module.exports = router;
