const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rameesck55:abcdefg@cluster0.1ht0boc.mongodb.net/facebooks_data?retryWrites=true&w=majority')
const schema=mongoose.Schema
const loginschema=new schema({
    emailphone:{type:String},
    password:{type:String}

})


var logindata=mongoose.model('login_data',loginschema)
module.exports=logindata