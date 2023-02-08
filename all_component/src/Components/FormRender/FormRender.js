import React, { useState }  from 'react'
import "../../App.css";


const FormRender = () => {

  const init={
    name:"",
    age:"",
    hobby:"",
    date:""
  }

    const[user, SetUser]=useState(init)
    const[data,SetData]=useState([])

    const getInput=(value, name)=>{
        let data=({ [name]: value})
        console.log(data)
        SetUser({ ...user, ...data})
      
        

    }
    console.log(user)


    const HandleSubmit=(e)=>{   
      e.preventDefault()
      SetData([...data, user])
      

    }

    // Delete function 
    const HandleDelete = (id) => {
      const Del = [ ...data]
      Del.splice(id,1)
      SetData(Del)
      
    };
 
  return (
    <>
   <div className='newform'>
   <form onSubmit={HandleSubmit}>
   <input type="text" placeholder='name' name="name" onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <br/>
    <input  type="number" placeholder='age' name="age" onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <br/>
    <input type="text" placeholder='hobby' name="hobby" onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <br/>
    <input type="date" placeholder='date' name="date" onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <br/>
    <button type='submit'>Submit</button>
    <button type='reset'>Reset</button>

   
   
   </form>
   </div>
  {data.map((el)=>
  <div className='card'>
  <p  key={el.id}>{ el.name} </p>
  <ul>{el.age}</ul>
  <ul>{el.hobby}</ul>
  <ul>{el.date}</ul>
  <button onClick={()=>HandleDelete(el.id)}>Delete</button>
 
  </div>
 
  
  
  )}
    
    </>
  )
}

export default FormRender