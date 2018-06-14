var express = require('express');
var app = express();
app.set('view engine', 'ejs');
var router = require('./routes/sample')

app.use('/',router);


app.use(express.static('public'));


app.listen(3000,()=>{
    console.log('listening @ 3000');
});