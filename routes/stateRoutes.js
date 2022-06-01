const router = require('express').Router();
const getFile = require('../utils/readFile');

router.get('/', (req,res)=>{
     res.send('Landing page')
})
router.get('/nigeria/states',async (req,res)=>{
     const filePath = '/home/enigma/projects/location-api/src/states/states.json';
     const data = await getFile(filePath);
     if(data){
          return res.status(200).send({
               status:200,
               data          
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