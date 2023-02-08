# React_Interview_preparation

# simple Toggle example-----
import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? 'On' : 'Off'}
      </button>
    </div>
  );
};

export default Toggle;




# Stopwatch-----------

import React, { useState, useEffect } from "react";

function App() {
  const [time, settime] = useState(0);
  const [start, setstart] = useState(false);
  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        settime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  return (
    <div>
      <h1>Stopwatch</h1>
      <h1>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 1000)).slice(-2)}</span>
      </h1>

      <div>
        <button onClick={() => setstart(true)}>Start</button>
        <button onClick={() => setstart(false)}>Stop</button>
        <button
          onClick={() => {
            settime(0);
            setstart(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;






# SImple Timer countdown---------------------
import React,{useState,useEffect} from 'react'

function App() {
 const [count,setcount]=useState(0);
 
useEffect(()=>{
const timer=setTimeout(() => {
  setInterval(()=>{
setcount((prevcount)=>prevcount+1)
  },1000)


}, 1000);

const cleanup=()=>{
  clearTimeout(timer)
}
return cleanup;


},[])

   return (
    <div>

<h1>Basic Timer</h1>
<h1>Countdown Timer:{count}</h1>



    </div>
  )
}

export default App





# Dialogue Box---------------------------

 import React, { useState } from 'react';

 const App = ({ children, open, onClose }) => {
   const [isOpen, setIsOpen] = useState(open);

   const handleClose = () => {
     setIsOpen(false);
     onClose();
   };

   if (!isOpen) {
     return null;
   }

   return (
     <div style={{ backgroundColor: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', border: '1px solid black' }}>
       <button onClick={handleClose} style={{ float: 'right' }}>
   );
 };

 export default App;


 # Palindrome number 1 - 100----------------
 import React, { useState, useEffect } from 'react';

const Palindrome = () => {
  const [palindromes, setPalindromes] = useState([]);

  useEffect(() => {
    let palindromeArray = [];
    for (let i = 1; i <= 1000; i++) {
      let number = i;
      let reverse = 0;
      let remainder;

      while (number > 0) {
        remainder = number % 10;
        reverse = reverse * 10 + remainder;
        number = Math.floor(number / 10);
      }

      if (reverse === i) {
        palindromeArray.push(i);
      }
    }
    setPalindromes(palindromeArray);
  }, []);

  return (
    <div>
      <h2>Palindrome Numbers between 1 to 1000</h2>
      <ul>
        {palindromes.map(palindrome => (
          <li key={palindrome}>{palindrome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Palindrome;




# Render ArrayOf Object...............
import React  from 'react'
import { useState } from 'react'


const RenderAll = () => {
    const data=[
        { "id": "1", "type": "Regular" },
        { "id": "2", "type": "Chocolate" },
        { "id": "3", "type": "Blueberry" },
        { "id": "4", "type": "Devil's Food" }
    ]

    const [text, SetText] = useState(data)

    const HandleDelete=(id)=>{
        const Del=text.filter((el)=>el.id!==id)
        SetText(Del)
     
    }
   


    
    

    console.log(text)
    
   
  return (
   <>
   <h1>Render the array of object and place  a delete button </h1>
   {text.map((el)=> 
   <li key={el.id}
   >{el.type}
   <button onClick={()=>HandleDelete(el.id)}>delete</button>
   
   </li>
   )}

   
   </>
  )
}

export default RenderAll





# Fetch data from api and render it..............
import React, { useState, useEffect } from "react";
import "../../App.css"

const getData = async (url) => {
  let res = await fetch(url);
  return res.json();
};

function Fetch() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    getData("https://fakestoreapi.com/products?limit=10").then((res) => {
      setinfo(res);
    });
  }, []);
  console.log(info);

  return (
    <>
    
    <div className={"main"}>
    {info?.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt="products" />
          <p>{el.title}</p>
          <p>{el.category}</p>
          <p>{el.price}</p>
        </div>
      ))}
    </div>
     
    </>
  );
}

export default Fetch;




# UseRef Example..............

import React,{useRef} from 'react'

function Useref() {
  const inputRef = useRef(null)
  const handleClick=()=>{
    inputRef.current.focus()
    inputRef.current.value="100";
    inputRef.current.style.color="red"

  }


    return (
    <div>
    <h1>Use Ref in react</h1>
<!-- <input type="text" placeholder='Enter your Text here' ref={inputRef} />
<button onClick={handleClick}>Click me</button> -->


    </div>
  )
}

export default Useref








# Form with input box Example..............

import React, { useState } from "react";

function Input() {
  const [input, setinput] = useState({});
  const [singlevalue, setsinglevalue] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinput({
      ...input,
      [name]: value,
    });
  };

  const handleSUbmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  //   SIngle input box value
  const handlekro = () => {
    console.log(singlevalue);
  };

  return (
    <!-- <div>
      <form onSubmit={handleSUbmit}>
        <input
          type="text"
          placeholder="Enter Your gmail"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Enter Your name"
          onChange={handleChange}
          name="naame"
        />
        <input
          type="number"
          placeholder="Enter Your age"
          onChange={handleChange}
          name="age"
        />
        <input
          type="password"
          placeholder="Enter Your password"
          onChange={handleChange}
          name="password"
        /> -->

        {/* A single input box */}

        <input type="submit" value="Submit" />
      </form>

      <input
        type="text"
        placeholder="I am a single input box"
        onChange={(e) => setsinglevalue(e.target.value)}
      />
      <button onClick={handlekro}>Submit</button>
    </div>
  );
}

export default Input;







# Render a Object in Reactjs..............

import React from 'react'

function Render(){

 Render A object
const obj={
    name:"Amit",
    age:45,
    address:"Delhi",
    profession:"Software Developer",
    education:"Graduate"
}
return(
    <>
 {
    Object.entries(obj).map(([key,value])=>(
      li key={key}>
        {key}:{value}
      /li>
    ))
 }
    </>
)

}
export default Render;




# Counter Using Usereducer hook in Reactjs..............

import React,{useReducer,useState} from "react";


const Reducer=(state,action)=>{
   switch(action.type){

   case "INCREMENT":return state+1

   case "DECREMENT":return state-1;

   case "RESET":return 0;
   
 case "UPDATE":return state+action.payload;

 case "DECRESEBYVAL":return state-action.payload
   default:return state;



   }
}

const initialState=0

function UseReducer(){
const [state, dispatch] = useReducer(Reducer,initialState);

const [val,setval]=useState('');


return(
    <>


 
 
 
        <h1>A basic Counter but by using UseReducer hook</h1>

 h1>{state}h1
 button onClick={()=>dispatch({type:"INCREMENT"})}>INC button
 button onClick={()=>dispatch({type:"RESET"})}>RESET button
 button onClick={()=>dispatch({type:"DECREMENT"})} disabled={state<1}>DEC button
 
 INcrease The counter by that Value of input box
input type="text" placeholder="Enter value here" onChange={(e)=>setval(Number(e.target.value))}/>

 button onClick={()=>dispatch({type:"UPDATE",payload:val})}>INCBYVAL button
 button onClick={()=>dispatch({type:"DECRESEBYVAL",payload:val})}>DECBYVAL button

    </button>
)

}

export default UseReducer;