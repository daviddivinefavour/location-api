require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

routes(app);

app.listen(port, ()=>{
     console.log('Server is listening on port ',port)
})