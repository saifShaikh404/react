import React, { useCallback, useMemo, useState } from 'react'


const CachedHook = () => {
    
    const [number, setNumber] = useState(40)
    
    let fib = useCallback(function fib(n){
        return (n <= 1) ? n : fib(n - 1) + fib(n - 2)
    },[])

    let fibVal = useMemo(() => fib(number) ,[number, fib])

  return (
    <>
      <div style={{marginLeft: "10px"}}>
        <div style={{color:"white"}}>result : {fibVal} </div>
      </div>
    </>
  )
}

export default CachedHook
