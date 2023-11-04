import React from 'react'
import Video from './Video'
import PlayButton from './PlayButton'

const VideoMap = ({video, dispatch, updateVideo}) => {
  return (
    <div className="container">
        {
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
                updateVideo={updateVideo}
                dispatch={dispatch}>
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
