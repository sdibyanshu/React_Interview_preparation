import React,{useState} from 'react'

function Button() {
 const [text, settext] = useState('')
 
const handlechange=(e)=>{
    
    settext(e.target.value)
}

console.log(text)

    return (
    <div>

<h2>Disbable Button challenge</h2>
<input type="text" placeholder='Enter here' value={text} onChange={handlechange}  />

<button disabled={text.length<1}>Click me</button>


    </div>
  )
}

export default Button