import React, { useDeferredValue, useTransition } from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import data from "../data.json";
import CustomVideoDispatch from '../context/CustomVideoDispatch';

const VideoMap = ({video, updateVideo}) => {

  // Method 1 useDeferredValue
  // let dispatch = CustomVideoDispatch()
  // function handleAddVideo(){
  //   dispatch({type:"LOAD", payload:data})
  // }
  // let defVideo = useDeferredValue(video)

  // Method 2 useTransition
  const [isPending, startTransition] = useTransition()
  let dispatch = CustomVideoDispatch()
  function handleAddVideo(){
    startTransition(() => {
      dispatch({type:"LOAD", payload:data})
    })
  }

  return (
    
    <div className="container">
      {/* For Method 1  */}
      {/* <button onClick={handleAddVideo}>Add Video</button> */}

      {/* For Method 2  */}
      <button onClick={handleAddVideo}>{isPending ? "Adding...":"Add Video"}</button>

        {
          // Method 1 useDeferredValue
          // defVideo.map((ele) => {

          video.map((ele) => {
            return (
              <Video 
                key={ele.id} 
                title={ele.title}
                channel={ele.channel}
                views={ele.views}
                duration={ele.duration}
                image={ele.image}
                id={ele.id}
                verified={ele.verified}
                updateVideo={updateVideo}>
                  <PlayButton 
                    value1={() => console.log("Playing... ", ele.title)} 
                    value2={() => console.log("Paused... ", ele.title)} >
                      {ele.title}
                  </PlayButton>
              </Video>
            )
          })
        }
      </div>
  )
}

export default VideoMap
