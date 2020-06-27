const express=require("express");
//import mongoose
var Request = require("request");
const cors=require("cors");

const morgan=require("morgan");
//require bodyParser
const bodyParser=require("body-parser");



const mongoose = require('mongoose');
const db = require('./models/DB');
//const push = require('./controllers/push');
//const testgo = require('./controllers/GoTest')

const app=express();

//routers
const ProductRouter = require('./Routers/ProductRouter');

app.use(cors('*'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));



app.use((req,res,next)=>{
    res.header('Access-control-Allow-Origin','*')
    res.header('Access-Control-Allow-Header','Origin,X-Request-With,Content-Type,Accept,Authorization');
    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Method','PUT,POST,GET,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();

})




// handle errors
app.use(function (err, req, res, next) {
    console.log(err);
  
    if (err.status === 404)
      res.status(404).json({message: "Not found"});
    else
      res.status(500).json({message: "Something looks wrong :( !!!"});
  });
  app.use('/Products', ProductRouter)
 
module.exports=app;
