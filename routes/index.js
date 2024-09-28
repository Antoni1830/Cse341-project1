const router= require('express').Router();

router.use('/',require('./sawgger'));

router.get('/',(req,res)=>{
    //#swagger.tags=['hello world']
    res.send('I love you <3');
});
//router.get('/',(req,res)=>{res.send('qlq el mio')});

router.use('/users',require('./users'))
module.exports=router;