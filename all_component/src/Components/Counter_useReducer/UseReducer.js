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

 <h1>{state}</h1>
 <button onClick={()=>dispatch({type:"INCREMENT"})}>INC</button>
 <button onClick={()=>dispatch({type:"RESET"})}>RESET</button>
 <button onClick={()=>dispatch({type:"DECREMENT"})} disabled={state<1}>DEC</button>
 
 <h2>INcrease The counter by that Value of input box</h2>
<input type="text" placeholder="Enter value here" onChange={(e)=>setval(Number(e.target.value))}/>

 <button onClick={()=>dispatch({type:"UPDATE",payload:val})}>INCBYVAL</button>
 <button onClick={()=>dispatch({type:"DECRESEBYVAL",payload:val})}>DECBYVAL</button>

    </>
)

}

export default UseReducer;