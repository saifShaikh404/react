import CustomVideoDispatch from '../context/CustomVideoDispatch'
import './Video.css'
import React, { useEffect } from 'react'


const Video = ({title, channel="Anonymus", views, duration, image, id, verified=false, children, updateVideo}) => {
  console.log("Video")
  let dispatch = CustomVideoDispatch()

  // useEffect(() => {
  //   let intervalID = setInterval(() => {
  //     console.log("Running", id)
  //   }, 1000)

  //   return () => {
  //     console.log("cleared")
  //     clearInterval(intervalID)
  //   }
  // }, [id])


  return (
    <>
    <div className='video'>
        <button className='close-btn' onClick={() => dispatch({type:'DELETE',payload:id})}> &#10060; </button>
        <button className='edit-btn' onClick={() => updateVideo(id)}> Edit </button>
        <img src={`https://picsum.photos/300/200?random=${image}`} alt='' />
        <div className='content'>
            <h5>{title}</h5>
            <p className='channelName'>{channel} {verified ? "✔️":null}</p>
            <p className='views'>{views} views <span>.</span> {duration}</p>
            <input type="hidden" value={id} />
            {children}
        </div>
    </div>
    </>
  )
}

export default Video
