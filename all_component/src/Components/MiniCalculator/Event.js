import React, { useState } from 'react'

const EventHandle = () => {
    const[add1,Setadd]=useState([])
    const[add2,Setadd2]=useState([])
    const[add3,Setadd3]=useState([])

   


    const AddNums=(num1,num2)=>{
       const result= Number(num1)+ Number(num2)
       Setadd3(result)
    }

    const SubNums=(num1,num2)=>{
        const result= Number(num1)- Number(num2)
        Setadd3(result)
     }
     
    const MulNums=(num1,num2)=>{
        const result= Number(num1) * Number(num2)
        Setadd3(result)
        
         
 
     }
  return (
    <div>
        <h1>Result: {add3}</h1>
        <input type="number" placeholder='num1' onChange={(e)=>Setadd(e.target.value)} value={add1}/>
        <input type="number" placeholder='num2' onChange={(e)=>Setadd2(e.target.value)} value={add2}/>
        <br/>
      
       
        <button onClick={()=>AddNums(add1, add2)}>Add Number</button>
        <br/>
        <button onClick={()=>SubNums(add1, add2)}>Subtract Number</button>
        <br/>
        <button onClick={()=>MulNums(add1, add2)}>Multiply Number</button>


       
       </div>
  )
}

export default EventHandle;