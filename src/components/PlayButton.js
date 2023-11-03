import React from 'react';
import './PlayButton.css'

const PlayButton = ({value1, value2,children}) => {

    // For Method 2
    // function handleClick(){
    //     console.log("clicked")
    // }

    let authentication = false;
    function handleClickEvent(e){
        // e.stopPropagation()
        if(authentication) {
            value2()
        } else {
            value1()
        }
        authentication = !authentication
    }

    return (
        <>
        <div className="button">
            {/* <button onClick={() => console.log("clicked")}> Click Me!!</button> */} {/* First Method :- we can use () => callback function to handle events. If we put onlly console log inside onclick it will execute not worked with click */}

            {/* <button onClick={handleClick}> Click Me!!</button> */} {/* In this method we created a function to handle event. We use handleClick inside onClick instead handleClick(). If we used handleClick() then it is executed and not worked with onclick */}

            {/* Original Button  */}
            {/* <button onClick={handleClickEvent}>Play || {children}</button> */}

            {/* Practicing changing dom with conditional rendering element  */}
            <button onClick={handleClickEvent}>{authentication ? "Play ||" : "Paused >"} {children}</button>

        </div>
        </>
    )
}

export default PlayButton
