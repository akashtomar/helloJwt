const express = require('express');
require('dotenv').config();
const router = require('./routes/sample');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
var app = express();

mongoose.promise = global.Promise; //*

app.set('view engine', 'ejs');
app.use(cors()); //CORS enabled for all origins
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use('/',router);


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: process.env.SESSION_SECRET, cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

//error handling middleware
app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('listening @ ', port);
});