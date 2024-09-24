const express = require('express');
const path = require('path'); //it is an inbuilt module not require to install  in nodejs
const student = require('./routes/student');
const app = express();
const connection = require('./connection');
connection();
app.use(student);

app.set('view engine','ejs'); //that's means which view engine we use
app.set('views',path.resolve('./views')); //jaise hi res.render mile toh views folder ke andr chlejana jhan meri file hogi.
app.listen(3000,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("server is running on 3000");
  }
})