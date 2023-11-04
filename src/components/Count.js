import React from 'react';
import { useState } from 'react';

const Count = () => {

    // Method 1 
    // let number = 0;
    // function handleUpdateNumber(e){
    //     e.stopPropagation()
    //     number++
    //     console.log(number)
    // } // It change number value +1 but cant able to update it in UI 

    // Method 2
    const [number, setNumber] = useState(0)
    function handleUpdateNumber(e){
        e.stopPropagation()

        // Method 2 Part - 1
        // setNumber(number+1) // In both occurences the value of number is 0
        // console.log(number) // In both occurences the value of number is 0, so even if we update state to 1 it will show 0 because the state updates (asynchronously)

        // Method 2 Part - 2
        // setNumber(number + 1)
        // setNumber(number + 1)
        // setNumber(number + 1)
        // console.log(number) // It will only update for one time because in both three setNumbers have Number 0 value in it and also state updated asynchronously tp avoid this problem we uses callBack function and pass current state as an argument.

        // Method 2 Part - 3
        setNumber((number) => number + 1)
        setNumber((number) => number + 1)
        setNumber((number) => number + 1)
        console.log(number) // Now it will update 3 times In this approach each state first took the number from an argument and return new number
    }

  return (
    <div className='count'>
        <p>{number}</p>
        <button onClick={handleUpdateNumber}>Add Value</button>
    </div>
  )
}

export default Count
