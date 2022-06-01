const router = require('express').Router();
const states = require('../src/states/states');

router.get('/',async (req,res)=>{
     if(states){
          return res.status(200).send({
               status:200,
               states          
          })
     }
     return res
     .status(404)
     .send({
          status:404,
          message: 'Oops... An error occurred.'
     })

})
module.exports = router;