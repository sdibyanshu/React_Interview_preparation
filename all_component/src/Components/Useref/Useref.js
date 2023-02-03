import React,{useRef} from 'react'

function Useref() {
  const position = useRef(null)
  
    return (
    <div>
<input type="text" placeholder='Enter your Text here'  />
<button>Click me</button>


    </div>
  )
}

export default Useref