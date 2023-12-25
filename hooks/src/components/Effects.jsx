import { useEffect, useState } from "react";
import React from 'react'

export const Effects = () => {
    const[count,setCount] = useState(0)
    const [age,setAge] = useState(30)

  return (
    <div>
        <h1>USE EFFECT</h1>
        <h2>COUNT - {count}</h2>
        <h2>AGE - {age}</h2>
        <button onClick={() => {
            setCount(count+1)
        }}></button>
        <button onClick={() => {
            setAge(age-1)
        }}>GET YOUUNGER</button>
    </div>
  )
}
