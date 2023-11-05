import React, { useRef } from 'react';
import { useState } from 'react';

const Count = () => {

  let num = useRef(0) // store data in object current property.

    const [number, setNumber] = useState(0)
    function handleUpdateNumber(e){
        e.stopPropagation()

        num.current++ // we checking the counter of number state execution
        console.log(num.current) // current is a default property we cannot change it

        setNumber((number) => number + 1)
        setNumber((number) => number + 1)
        setNumber((number) => number + 1)
        console.log(number) 


    }

  return (
    <div className='count'>
        <p>{number}</p>
        <button onClick={handleUpdateNumber}>Add Value</button>
    </div>
  )
}

export default Count
