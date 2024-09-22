const router= require('express').Router();

//router.get('/',(req,res)=>{res.send('qlq el mio')});

router.use('/users',require('./users'))
module.exports=router;