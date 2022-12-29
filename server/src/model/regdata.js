const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://rameesck55:abcdefg@cluster0.1ht0boc.mongodb.net/facebooks_data?retryWrites=true&w=majority')
const schema=mongoose.Schema
const regschema=new schema({
    fullname:{type:String},
    emailphone:{type:String},
    age:{type:String},
    password:{type:String,}
})

var regdata=mongoose.model('registre_data',regschema)
module.exports=regdata
