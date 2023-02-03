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
<input type="text" placeholder='Enter your Text here' ref={inputRef} />
<button onClick={handleClick}>Click me</button>


    </div>
  )
}

export default Useref