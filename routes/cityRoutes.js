const router = require('express').Router();
const getFile = require('../utils/readFile');
const path = require('path');

router.get('/:state', async (req,res)=>{
     const basePath = '/home/enigma/projects/location-api/src/cities/';
     const {state} = req.params;
     const fullPath = path.join(basePath,(state.toLowerCase() + '.json'))
     const data = await getFile(fullPath);

     if(data){
          return res.status(200).send({
               status:200,
               state: `${state.toUpperCase()} STATE`,
               cities: data          
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