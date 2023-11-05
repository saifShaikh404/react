import React from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import axios from 'axios'
import { useEffect } from 'react'

const VideoMap = ({video, updateVideo}) => {

  useEffect(()=> {
    async function handleApi(){
      let data = await axios.get("https://jsonplaceholder.typicode.com/todos/")
      console.log(data.data)
    }
    handleApi()
  },[])


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
