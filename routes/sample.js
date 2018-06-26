var express = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{
        pageType : "signin"
    });
});
router.get('/signup',(req,res)=>{
    res.render('index',{
        pageType : "signup"
    });
});

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('All set!');
    //res.json(req);
});

router.post('/signup', (req, res)=>{


});





module.exports = router;