import './App.css';
import Video from './components/Video';
// import Count from './components/Count';
import { useState } from 'react';
import data from "./data.json";
import PlayButton from './components/PlayButton';

function App() {
  console.log("App")
  const [video, setVideo] = useState(data)

  function handleUpdate(){
    setVideo([...video, {
        id: video.at(-1).id + 1,
        title: "Youtube",
        channel: "Frenzy",
        views: "5K",
        duration: "5 months ago",
        image: video.at(-1).image + 1,
        verified: true
    }])
  }

  return (
    <>
      <h1 className='main-title'>Image gallary 
        <button className='update-btn' onClick={handleUpdate}>Update Data</button>
      </h1>

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
                verified={ele.verified}>
                  <PlayButton 
                    value1={() => console.log("Playing... ", ele.title)} 
                    value2={() => console.log("Paused... ", ele.title)} >
                      {ele.title}
                  </PlayButton>
              </Video>
            )
          })
        }

        {/* <Count></Count> */}

      </div>
    </>
  );
}

export default App;
