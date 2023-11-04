import React, { useEffect, useState } from 'react'
import './AddVideo.css';

const AddVideo = ({dispatch, editableVid}) => {

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
          dispatch({type:'UPDATE',payload:addVideo})
        } else {
          dispatch({type:'ADD',payload:addVideo})
        }

        setAddVideo(dataToAdd)

      }

      function handleChangeInput(e){
        e.stopPropagation();
        setAddVideo({
            ...addVideo,
            [e.target.name]: e.target.value
        })
      }

      useEffect(() => {
        if(editableVid !== null){
          setAddVideo(editableVid);
        } else {
          setAddVideo(dataToAdd)
        }
      },[editableVid])

  return (
    <div className='header'>
      <h1 className='main-title'>Image gallary </h1>
      <form>
        <input type="text" onChange={handleChangeInput} value={addVideo.title} name="title" placeholder="Enter Title" />
        <input type="text" onChange={handleChangeInput} value={addVideo.views} name="views" placeholder="Enter Views" />
        <input type="text" onChange={handleChangeInput} value={addVideo.duration} name="duration" placeholder="Enter duration" />
        <button className='update-btn' onClick={handleAdd}>{editableVid ? "Edit":"Add"} Video</button>
      </form>
    </div>
  )
}

export default AddVideo
