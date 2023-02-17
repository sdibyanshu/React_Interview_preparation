import React from 'react'


import { useSelector,useDispatch } from 'react-redux'

import {increment,decrement} from "../Redux/Counter/counter.action"
function Counter() {
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();
  console.log(count);
  
  
    return (
    <div>

<h1>{count}</h1>




<button  onClick={()=>dispatch(increment())}>INC</button>
<button disabled={count==0} onClick={()=>dispatch(decrement())}>DEC</button>


    </div>
  )
}

export default Counter