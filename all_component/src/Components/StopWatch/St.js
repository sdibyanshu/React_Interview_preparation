import React, { useState, useEffect } from "react";


const St = () => {
    const[start,SetStart]=useState(false)
    const[time,SetTime]=useState(0)

    useEffect(() => {
        let interval=null;
        if(start){
            interval = setInterval(() => {
                SetTime((prev)=>prev+10)
                
            }, 10);
            console.log(interval)
        }else{
            clearInterval(interval)
        }

        return()=>clearInterval(interval)
    
    }, [start])
  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
      
        </h1>

        <div>
            <button onClick={()=>SetStart(true)}>Start</button>
            <button onClick={()=>SetStart(false)}>Stop</button>
            <button onClick={()=>{
                SetTime(0)
                 SetStart(false)}}
                 >Reset</button>
        </div>
    </div>
  )
}

export default St