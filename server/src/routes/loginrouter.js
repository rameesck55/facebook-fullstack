const express=require('express');
const loginrouter=express.Router();

const logintable=require('../model/logindata')


loginrouter.post('/savelogin',(req,res)=>{
    const items={
        emailphone:req.body.emailphone,
        password:req.body.password
    }
    // console.log(items)

    var logins=logintable(items);
    logins.save().then(()=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:"data saved"

        })
    })
})







module.exports=loginrouter