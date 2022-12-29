import React from 'react'
import './Endbar.css'
import {onlinefriends} from '../data'

function Endbar() {
  return (
    <div className='endbarmaindiv'>
        <div className='sidebarheadnotifications'>
           <i class="fa fa-gift" aria-hidden="true" id='giftbox'></i>
           <span className='birthday'>Pola Foster</span> and <span className='birthday'>3 other friends</span> have birthday today
              <br/>
              <br />
              <br />
            <div className='img-fluid'>
                <img className='imageinendbar' src="https://images.designtrends.com/wp-content/uploads/2016/02/25060758/Food-Burger-Wallpaper.jpg" alt="" />
            </div> 
            <br />
            <p className='Online_Friends'>Online Friends</p> 
            


              {onlinefriends.map((value,index)=>(
                <div className='spaceforonlinefriends'>
                <div className='friends'><img src={value.leimage} alt="Avatar" class="avatar"/> <p className='nameoffriend'> {value.name}</p></div><br />
                </div>

              )
              )}


                
                
                
            
        </div>
        


      
    </div>
  )
}

export default Endbar
