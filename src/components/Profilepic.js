import React from 'react'
import './Profilepic.css'

function Profilepic() {
  return (
    <div className='mainpro'>
        <div className='imagebackgrounddiv'>
             <img className='backgroundimageinpro' src="https://www.hdwallpapers.in/download/tree_in_center_of_lake_reflection_in_water_4k_hd_nature-3840x2160.jpg" alt="" />
        </div>

        <div className='avatarpicdiv'>
            <div className='avatarpicx'><i  id="proavatar" class="fa fa-user-circle" aria-hidden="true"></i></div>
             
             <div className='name_welcomediv'>
               <h2 className='nameinpro'>Alex</h2><p className='infoinname'>Hello my friends!</p>
             </div>

        </div>

        
      
    </div>
  )
}

export default Profilepic
