import './App.css';
import { useState } from 'react';
import data from "./data.json";
import AddVideo from './components/AddVideo';
import VideoMap from './components/VideoMap';

function App() {
  console.log("App")
  const [video, setVideo] = useState(data)
  const [editableVid, setEditableVid] = useState(null)

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

  function deleteVideo(id) {
    setVideo(video.filter( ele => ele.id !== id));
  }

  function updateVideo(id){
    let getSingleVideo = video.find( ele => ele.id === id)
    setEditableVid(getSingleVideo)
    console.log(getSingleVideo)
  }

  function handleUpdateVideo(data){
    let index = video.findIndex((ele) => ele.id === data.id)
    let dummyData = [...video]
    dummyData.splice(index,1,data)
    setVideo(dummyData)
    setEditableVid(null)
  }

  return (
    <>
    <AddVideo editableVid={editableVid} handleAddVideo={handleAddVideo} handleUpdateVideo={handleUpdateVideo} ></AddVideo>
    <VideoMap video={video} updateVideo={updateVideo} deleteVideo={deleteVideo} ></VideoMap>
    </>
  );
}

export default App;
