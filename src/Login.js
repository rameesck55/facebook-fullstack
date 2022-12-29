import React,{useEffect, useState} from 'react'
import './Login.css'

import {Link,useNavigate} from 'react-router-dom'
import Text from './Text'
import axios from 'axios'




export default function Login() {
   const navigate=useNavigate()
    const [loginData,setLogin]=useState({})
    const [singleLogindata,setsingleLogindata]=useState(false)


    const changeInput=(event)=>{
        const {name,value}=event.target

        setLogin({
            ...loginData,
            [name]:value,

        })

        // axios.post("http://localhost:3000/register/loginitem",loginData).then((response)=>{
        // console.log(response.data)})

    }


    // useEffect(()=>{

    //    setsingleLogindata(response.data)
  
    // },[submitting])



    const submitting=(event)=>{
        // console.log("loginData",loginData)
        axios.post("http://localhost:3000/register/loginitem",loginData).then((response)=>{
        
       
        console.log(response.data)
        
        if(response.data.success===true){
          navigate("/home")
        }else{
          setsingleLogindata(true)
        }
        })
        event.preventDefault()
        
    }
  return (
    <>


<div className='main-body'>



<div className='bodydiv'>
  <input placeholder=' Email address or phone number' name='emailphone' onChange={changeInput}></input>
  <br></br>
  <input placeholder=' Password' name='password' onChange={changeInput}></input>
  <br></br>
  <button className='Login' type='submit' onClick={submitting}><Link to={'/'} className='loginlinkbutton'>Log in</Link> </button>
  <Link to={'/register'} >Create New Account </Link>
  <hr></hr>
  <button className='Newaccount' >forgotten password?</button>
{singleLogindata===true?
 <p style={{color:"red"}}>login failed</p>:
""
 
}

</div>
<Text/> 







</div> 




   
</>
  )
}
