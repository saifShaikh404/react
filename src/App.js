import './App.css';
import { useReducer, useState } from 'react';
import data from "./data.json";
import AddVideo from './components/AddVideo';
import VideoMap from './components/VideoMap';

function App() {
  console.log("App")

  // const [video, setVideo] = useState(data)
  const [editableVid, setEditableVid] = useState(null)

  function videoReducer(initialState, action){
    switch(action.type){

      case 'ADD':
        return [
          ...initialState,
          {
            ...action.payload,
            id: initialState.at(-1).id + 1,
            image: initialState.at(-1).image + 1,
            verified: !initialState.at(-1).verified
          }
        ];

      case 'DELETE':
        setEditableVid(null);
        return initialState.filter( ele => ele.id !== action.payload);

      case 'UPDATE':
        let index = initialState.findIndex((ele) => ele.id === action.payload.id);
        let dummyData = [...initialState];
        dummyData.splice(index,1,action.payload);
        setEditableVid(null);
        return dummyData;

      default:
        return initialState;
    }
  }

  const [video, dispatch] = useReducer(videoReducer, data)
  
  function updateVideo(id){
    let getSingleVideo = video.find( ele => ele.id === id)
    setEditableVid(getSingleVideo)
    console.log(getSingleVideo)
  }

  return (
    <>
    <AddVideo editableVid={editableVid} dispatch={dispatch} ></AddVideo>
    <VideoMap video={video} updateVideo={updateVideo} dispatch={dispatch} ></VideoMap>
    </>
  );
}

export default App;
