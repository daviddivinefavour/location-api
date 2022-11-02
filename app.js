require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// app.use("/static", express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
     var options = {
          root: path.join(__dirname)
      };
       
      var fileName = './index.html';
      res.sendFile(fileName, options, function (err) {
          if (err) {
              console.log(err);
          } 
      });
})

routes(app);

app.listen(port, ()=>{
     console.log('Server is listening on port ',port)
})