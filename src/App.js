import './App.css';
import { useState } from 'react';
import data from "./data.json";
import AddVideo from './components/AddVideo';
import VideoMap from './components/VideoMap';

function App() {
  console.log("App")
  const [video, setVideo] = useState(data)

  function handleAddVideo(value) {
    setVideo([
      ...video,
      {
        ...value,
        id: video.at(-1).id + 1,
        image: video.at(-1).image + 1,
        verified: !video.at(-1).verified
      }
    ])
  }

  return (
    <>
    <AddVideo handleAddVideo={handleAddVideo} ></AddVideo>
    <VideoMap video={video} ></VideoMap>
    </>
  );
}

export default App;
