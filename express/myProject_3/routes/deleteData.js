var express = require('express');
var router = express.Router();
const collection  = require('../utils/mongoConnection').connection();


/* GET home page. */
router.get('/deleteData', async  function(req, res, next) {
    const name = req.query.name;
    try{
    const deleteResult = await (await collection).deleteOne({name});
    const data = await (await collection).find().toArray();
    res.render('showData', {data});
    }catch(err)
    {
        console.log(err)
    }
  res.status(500).send('Some Error in Delete Operation');
});

module.exports = router;