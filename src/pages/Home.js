import React from 'react'
import Endbar from '../components/Endbar'
import Nav from '../components/Nav' 
import Post from '../components/Post'
import Questionbar from '../components/Questionbar'
import Sidebar from '../components/Sidebar'
import {post} from '../data'


export default function Home() {
  return (
    <div>
      <div className='row'>
        <div className='col-lg-12'><Nav/></div>
        </div>

      <div className='row'>  
        <div className='col-lg-3'><Sidebar/></div>
        <div className='col-lg-6'><Questionbar/>

        {post.map((value,index)=>(
           <Post data={value}/>

        ))}


        
       
        {/* <Post/><Post/> */}


       
        </div>
        <div className='col-lg-3'><Endbar/></div>
      </div>
    </div>
  )
}
