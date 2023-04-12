import React from 'react'

function Timer() {
    const [count,setcount]=useState(0);
    const [text,settext]=useState('Start');
    const [running,setrunning]=useState(false);
    const handleStart=()=>{
      setrunning(true);
      settext("STOP")
      if(text==="STOP"){
        setrunning(false);
        settext("Start")
      }
    }
    const handleresume=()=>{
      setcount(0);
      setrunning(false);
    }
   
    useEffect(()=>{
    let interval=null;
     if(running){
      interval=setInterval(() => {
        setcount((prev)=>prev+1)
      }, 1000);
    }else if(!running){
      clearInterval(interval);
    }
      return ()=>clearInterval(interval);
   },[running])
  
  
  
    return (
    <div>A Simple Timer</div>
  )
}

export default Timer