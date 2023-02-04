import React from 'react'

const Child = ({props,HandleChnage}) => {
  return (
    <div>
        {props}
        <button onClick={HandleChnage}>Changing</button>
        
        
        </div>
  )
}

export default Child