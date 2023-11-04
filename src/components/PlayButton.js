import React from 'react';
import './PlayButton.css'
import { useState } from 'react';

const PlayButton = ({value1, value2,children}) => {
    const [authentication, setAuthentication] = useState(false);
    function handleClickEvent(e){
        e.stopPropagation()
        if(authentication) {
            value2()
        } else {
            value1()
        }
        setAuthentication(!authentication)
    }

    return (
        <>
        <div className="button">
            
            <button onClick={handleClickEvent}>{authentication ? "Paused ⏸️" : "Play ▶️"} {children}</button>

        </div>
        </>
    )
}

export default PlayButton
