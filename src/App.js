import './App.css';
import { useReducer, useState } from 'react';
import data from "./data.json";
import Count from './components/Count';
import AddVideo from './components/AddVideo';
import VideoMap from './components/VideoMap';
import ThemeContext from './context/ThemeContext';
import VideoDispatchContext from './context/VideoDispatchContext';

function App() {
  console.log("App")

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

  const [mode, setMode] = useState('dark-mode')
  
  function modeSwitcher(){
    setMode(mode == "dark-mode"? "light-mode":"dark-mode")
  }

  function updateVideo(id){
    let getSingleVideo = video.find( ele => ele.id === id)
    setEditableVid(getSingleVideo)
    console.log(getSingleVideo)
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideoDispatchContext.Provider value={dispatch}>
        <Count></Count>
        <div className={`main-app ${mode}`}>
          <AddVideo editableVid={editableVid} modeSwitcher={modeSwitcher} mode={mode} ></AddVideo>
          <VideoMap video={video} updateVideo={updateVideo} ></VideoMap>
        </div>
      </VideoDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
