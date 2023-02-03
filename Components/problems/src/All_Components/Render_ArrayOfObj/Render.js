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
   >{el.id}{el.type}
   <button onClick={()=>HandleDelete(el.id)}>delete</button>
   
   </li>
   )}

   
   </>
  )
}

export default RenderAll

