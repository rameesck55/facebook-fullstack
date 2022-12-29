import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sectionside'>
        <br></br>
      <h5><i class="fa fa-rss" aria-hidden="true"></i>  <span> Feed</span></h5>
      <br></br>
      <h5><i class="fa fa-commenting" aria-hidden="true">  </i><span> Chats</span></h5>
      <br></br> 
      <h5><i class="fa fa-video-camera" aria-hidden="true"> </i><span>  Videos</span></h5>
      <br></br>

      <h5><i class="fa fa-users" aria-hidden="true"></i><span> Groups</span></h5>
      <br></br>

      <h5><i class="fa fa-bookmark" aria-hidden="true"></i><span> Bookmarks</span></h5>

      <br></br>

      <h5><i class="fa fa-question-circle" aria-hidden="true"></i><span> Questions</span></h5>

      <br></br>
      <h5><i class="fa fa-briefcase" aria-hidden="true"></i><span> Jobs</span></h5>

      <br></br>      <h5><i class="fa fa-calendar-o" aria-hidden="true"></i><span> Events</span></h5>


      <br></br>
      <h5><i class="fa fa-graduation-cap" aria-hidden="true"></i><span> Courses</span></h5>

      <br></br>

      <button className='showmorebutton'> Show more</button>

      

    </div>
  )
}

export default Sidebar
