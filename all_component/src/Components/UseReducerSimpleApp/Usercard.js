import React from 'react'

function Usercard({name,url}) {
  const style={
   padding: '2rem',
   border:"1px solid black",
   borderRadius: '1rem',
   margin: '1rem',
   display: 'flex',
   


  }
  
  
    return (
    <div style={style}>


<div>
    <img src={url} alt="" />
</div>

<div>
    Name:{name}
</div>








    </div>
  )
}

export default Usercard