import React,{useState} from 'react'

function Show() {
const [show, setshow] = useState(false);  
  
const handleshow=()=>{
    setshow(!show);

}


   return (
    <div>


<button onClick={handleshow}>{show?"show elem":"hide elem"}</button>

{
    !show &&
<h2>Hello</h2>
    
}

    </div>
  )
}

export default Show