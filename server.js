var express = require('express');

var app = express();


app.get('/', (req,res)=>{
    console.log("git is working i think");
    res.send('HELLO WORLD!11');
});


app.listen(3000,()=>{
    console.log('listening @ 3000');
});