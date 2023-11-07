import React, { forwardRef, useContext,useEffect, useImperativeHandle, useRef, useState } from 'react'
import './AddVideo.css';
import ThemeContext from '../context/ThemeContext';
import CustomVideoDispatch from '../context/CustomVideoDispatch';

const AddVideo = forwardRef(function AddVideo({editableVid, modeSwitcher, mode}, ref){

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
    const childRef = useRef(null)

    useImperativeHandle(ref, ()=>{
      return {
        focus(){
          childRef.current.focus()
        }
      }
    }, [])

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

      function hancleCheckRef(e){
        e.preventDefault()
        childRef.current.value = "I m working with child ref"
      }

      useEffect(() => {
        if(editableVid !== null){
          setAddVideo(editableVid);
        } else {
          setAddVideo(dataToAdd)
        }
        
      },[editableVid])

      let theme = useContext(ThemeContext)
      let dispatch = CustomVideoDispatch()

  return (
    <div className='header'>

      <div className="header-content">
          <h1 className={`main-title ${theme}`}>Image gallary</h1>
          <button className={`${theme}`} onClick={modeSwitcher}>Swith Mode to {mode == 'dark-mode' ? '☀️': '🌑'}</button>
      </div>

      <form className={`form-element ${theme}`}>
        <button onClick={hancleCheckRef}>Check Childe Ref</button>
        <input type="text" ref={childRef} onChange={handleChangeInput} value={addVideo.title} name="title" placeholder="Enter Title" /> 
        <input type="text" onChange={handleChangeInput} value={addVideo.views} name="views" placeholder="Enter Views" />
        <input type="text" onChange={handleChangeInput} value={addVideo.duration} name="duration" placeholder="Enter duration" />
        <button className='update-btn' onClick={handleAdd}>{editableVid ? "Edit":"Add"} Video</button>
      </form>
      
    </div>
  )
})

export default AddVideo
