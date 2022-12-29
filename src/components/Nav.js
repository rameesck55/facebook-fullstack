import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'


export default function Nav(){
  return (
    <div >




        

        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">My_tweet</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
      <a class="nav-link" href="/home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/profile">Profile</a>
      </li>
      
    </ul>
    <form class="form-inline my-0 my-lg-0">
         <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
       </form>
   

    
    <div className='profileiconinnav'><i class="fa fa-user-circle-o " aria-hidden="true"></i></div>
    
  </div>
</nav>





    </div>
  )
}
