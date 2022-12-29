import React from 'react'
import Endbar from '../components/Endbar'
import Nav from '../components/Nav'
import Post from '../components/Post'
import Profilepic from '../components/Profilepic'
import Questionbar from '../components/Questionbar'
import Sidebar from '../components/Sidebar'
import {post} from '../data'

export default function Profile() {
  return (
    <div>
        <Nav/>
        <div className='row'>
            <div className='col-lg-3'><Sidebar/></div>
            <div className='col-lg-9'>
                 <div className='col-lg-12'><Profilepic/></div>
                 <div className='row'>
                 <div className='col-lg-8'><Questionbar/>

                 {post.map((value,index)=>(
                        <Post data={value}/>

                        ))}



                 </div>
                 <div className='col-lg-4'><Endbar/></div>
                 </div>

                
            </div>
        </div>
        
            
            

           
         
      
      
    </div>
  )
}
