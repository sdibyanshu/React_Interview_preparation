
import React from 'react'
import { useState } from 'react'
import Child from "./Child"

const Parent = (props) => {

  const [name, SetName] = useState("prem")


  const HandleChnage = () => {
    if (name === "prem") {
      SetName("aman")
    }
    if (name === "aman") {
      SetName("prem")
    }
  }
  return (
    <>
      <h3>Pass the properties and function from parent to child, in this problem we define HandleChnage  function in parents file and declare at child componnets</h3>
      <Child props={name} HandleChnage={HandleChnage} />
    </>
  )
}

export default Parent;