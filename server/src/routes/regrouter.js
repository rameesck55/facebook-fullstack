const express=require('express')
const regrouter=express.Router();
const registrationtable=require('../model/regdata')




regrouter.post('/savereg',(req,res)=>{
    const itemsinreg={
        fullname:req.body.fullname,
        emailphone:req.body.emailphone,
        age:req.body.age,
        password:req.body.password
    }

    var regis=registrationtable(itemsinreg);
    regis.save().then((dataaa)=>{
        return res.status(200).json({
            success:true,
            error:false,
            message:dataaa

        })
    })
})

//CHECK LOGIN ITEMS IS ALREADY EXIST OR NOT IN REGISTR DATAS

regrouter.post('/loginitem',(req,res)=>{
    var emailphone=req.body.emailphone;
    var password=req.body.password;
    registrationtable.findOne({emailphone:emailphone})
    .then((findd)=>{
        if(!findd){
            return res.status(200).json({
                 success:false,
                 error:true,
                 message:"not have such email/phone"
            })

        }
        else{
            var oldpassword=findd.password;
            if(oldpassword!=password){
                return res.status(200).json({
                    success:false,
                    error:true,
                    message:"entered wrong password"
               })
            }
            else{
                return res.status(200).json({
                    success:true,
                    error:false,
                    message:findd
                })
            }  
        }
    })
    
})











module.exports=regrouter