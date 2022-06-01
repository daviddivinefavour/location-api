const router = require('express').Router();
// const getFile = require('../utils/readFile');
const path = require('path');
const basePath = '../src/cities/';

router.get('/:state', async (req,res)=>{
     const {state} = req.params;
     const fullPath = path.join(basePath,(state.toLowerCase() + '.js'));
     const file = await require(`${fullPath}`);
     if(file){
          return res.status(200).send({
               status:200,
               state: `${state.toUpperCase()} STATE`,
               cities: file          
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