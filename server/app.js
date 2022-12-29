const express=require('express')
const app=express();

const loginrouter=require('./src/routes/loginrouter')
const regrouter=require('./src/routes/regrouter')


app.use(express.json())
app.use(express.urlencoded({extended:true}))  // post data
// to access the dB
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });


  
app.set('view engine','ejs')
app.set('views','./src/views')
app.use(express.static('./public'))




app.use('/',loginrouter)
app.use('/register',regrouter)













app.listen(3000,()=>{
    console.log("server is at http://localhost:3000")
})