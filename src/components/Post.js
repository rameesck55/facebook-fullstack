import React,{useState} from 'react'
import './post.css'


function Post({data}) {

  const [likes,updatelike]=useState(data.like)

  const [unlikes,updateunlike]=useState(0)

  const [comments,updatecomments]=useState(0)


  const likeincrease=()=>{
    updatelike(likes+1)
    


  }
  const unlikeincrease=()=>{
    updateunlike(unlikes+1)

  }
  const commentsincrease=()=>{
    updatecomments(comments+1)

  }




  console.log(likes)
  return (

   








  <div>
    <div className='postforprofile'>


        <div className='postforidentity'>
        <img src={data.profileimage} alt="Avatar" class="avatar"/><h6 className='nameofperson'>{data.name}</h6><p className='minofperson'>{data.time}</p>
          <div className='moreicon'><i class="fa fa-ellipsis-v" id='iconsinques' aria-hidden="true"></i></div>
          <br />
          


        </div>
        <p className='mainpost'>Love for all, Hatred For None</p>
        
        <div className='imageforpost'><img className='postimagesinimg' src={data.postimage} alt="" /></div>
        <div className='row' id='bottomiconspace'>
          <div className='col-lg-4' id='iconsinbottomlike'><i class="fa fa-thumbs-up" aria-hidden="true" onClick={likeincrease} ></i></div>
          <div className='col-lg-4' id='iconsinbottomdislike'><i class="fa fa-thumbs-down " aria-hidden="true" onClick={unlikeincrease}></i></div>
          <div className='col-lg-4' id='iconsinbottomcomment'><i class="fa fa-comments" aria-hidden="true" onClick={commentsincrease}></i></div>

        </div>

        <div className='row' id='bottomcountspace'>
          <div className='col-lg-4' id='iconsinbottom'><p className='countsinbottom'>{likes}</p></div>
          <div className='col-lg-4' id='iconsinbottom'><p className='countsinbottom'>{unlikes}</p></div>
          <div className='col-lg-4' id='iconsinbottom'><p className='countsinbottom'>{comments}</p></div>

        </div>
    </div>    



    




    




    </div>
  )
}

export default Post
