import React from 'react'
import './Questionbar.css'

function Questionbar() {
  return (
    <div className='Questionbar'>
        <div className='profilequestion'>
        <h4><i class="fa fa-user-circle-o" aria-hidden="true"></i> <input type="text" className='inputfotquestion' placeholder='what is in your mind?'/> </h4>
        </div>
        <hr />
        <div>
            <h6 className='direction' id='dd1'><i class="fa fa-picture-o" aria-hidden="true"></i><span className='wordsinpro'>  Photos or Video</span></h6>
            <h6 className='direction' id='dd2'><i class="fa fa-tag" aria-hidden="true"></i><span className='wordsinpro'>  Tag</span></h6>
            <h6 className='direction' id='dd3'><i class="fa fa-map-marker" aria-hidden="true"></i><span className='wordsinpro'>  Location</span></h6>
            <h6 className='direction' id='dd4'><i class="fa fa-smile-o" aria-hidden="true"></i><span className='wordsinpro'>  Feelings</span></h6>
            <button className='shareinpro'><p className='wordsinprobutton'> share</p></button>

        </div>
      
    </div>
  )
}

export default Questionbar
