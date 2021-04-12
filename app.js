const express = require('express');
var app=express();
var path=require('path');
var config=require('config');
var router=require('./routes/PersonRouter');

app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'view'));
app.use(express.static(path.join(__dirname,'./public')));
app.use('/',router);


app.listen( process.env.PORT || config.get('app.port'),()=>{
    console.log('server started at '+config.get('app.port'));
});