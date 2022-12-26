var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();


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
      if (!data.email) 
      return res.status(400).send("email not found");

      if(data.password === password){
        res.render('showData', {data:data1});
        return;
      }else {
        return res.render('loginPage',{error:'Incorect credentials'});
      }       
  }catch(err)
  {
    res.status(500).send('Login Fail');
  }
});


module.exports = router;
