import React from 'react'

function Render(){



// Render A object


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
      <li key={key}>

        {key}:{value}
        
      </li>
    ))
 }



    </>
)


}
export default Render;