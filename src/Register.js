import React,{useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Register() {
    const [regData, setreg] = useState({})


    const changeInputReg=(event)=>{
        const {name,value}=event.target

        setreg({
            ...regData,
            [name]:value,

        })

    }
    const signUp=(event)=>{
        event.preventDefault()
       axios.post('http://localhost:3000/register/savereg',regData).then((response)=>{
        console.log(response.data);
       })


    }

    
  return (
    <div>
        <div className='bodydiv-reg'>
        <form>
            <h1 className='facebook-reg'>facebook</h1>
            <br></br>
        <input placeholder='fullname' name='fullname' onChange={changeInputReg}></input>
        <input placeholder='email/phone' name='emailphone' onChange={changeInputReg}></input>
        <input placeholder='age' name='age' onChange={changeInputReg}></input>
        <input placeholder='password' name='password' onChange={changeInputReg}></input>
        <hr></hr>
        <button className='Newaccount-reg' onClick={signUp} type='submit'><Link to={'/'}>signup</Link></button>
        <Link to={'/'}>Already have account</Link> 
        </form>
        </div>





    </div>
  )
}
