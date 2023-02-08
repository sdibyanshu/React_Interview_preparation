import React, { useEffect,useState } from "react";

function Useeffect() {
 
const [count, setcount] = useState(0);

 useEffect(()=>{
console.log("hello")
 },[count])

 console.log("hello 2")


 //  Note:THis useEffect will only be updated when there is a change in useEffect refer to youtube video for more information:https://youtu.be/zJeyz5mIXGQ
 
 
    return (
    <div>
      <h1>
       
        UseEffect:Whenever our Component is created it is called and at the same
        time Whenever any state/prop get updated it is called
      </h1>
      <p>
        UseEffect hook is a combination of
        componentDidMount,componentWillUnmount and componentDidMount
      </p>

<h2>{count}</h2>

<button onClick={()=>setcount(count+1)}>Clickme</button>



    </div>
  );
}

export default Useeffect;
