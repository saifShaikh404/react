import React, { useContext,useEffect, useState } from 'react'
import './AddVideo.css';
import ThemeContext from '../context/ThemeContext';

const AddVideo = ({dispatch, editableVid, modeSwitcher, mode}) => {

    let dataToAdd = {
            id: null,
            title: "",
            channel: "Frenzy",
            views: "",
            duration: "",
            image: "",
            verified: true
    }

    const [addVideo, setAddVideo] = useState(dataToAdd)

    function handleAdd(e){
        e.stopPropagation();
        e.preventDefault();

        if(editableVid !== null){
          dispatch({type:'UPDATE',payload:addVideo});
        } else {
          dispatch({type:'ADD',payload:addVideo});
        }

        setAddVideo(dataToAdd);

      }

      function handleChangeInput(e){
        e.stopPropagation();
        setAddVideo({
            ...addVideo,
            [e.target.name]: e.target.value
        });
      }

      useEffect(() => {
        if(editableVid !== null){
          setAddVideo(editableVid);
        } else {
          setAddVideo(dataToAdd)
        }
      },[editableVid])

      let theme = useContext(ThemeContext)

  return (
    <div className='header'>

      <div className="header-content">
          <h1 className={`main-title ${theme}`}>Image gallary</h1>
          <button className={`${theme}`} onClick={modeSwitcher}>Swith Mode to {mode == 'dark-mode' ? '☀️': '🌑'}</button> 
          {/* &#x1F319; */}
      </div>

      <form className={`form-element ${theme}`}>
        <input type="text" onChange={handleChangeInput} value={addVideo.title} name="title" placeholder="Enter Title" />
        <input type="text" onChange={handleChangeInput} value={addVideo.views} name="views" placeholder="Enter Views" />
        <input type="text" onChange={handleChangeInput} value={addVideo.duration} name="duration" placeholder="Enter duration" />
        <button className='update-btn' onClick={handleAdd}>{editableVid ? "Edit":"Add"} Video</button>
      </form>
    </div>
  )
}

export default AddVideo
