import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Counter4 = () => {
    const[age,getAge] = useState(19)
    const[sib,getSib] = useState(3)

    useEffect(() => {
        return(() => {
            console.log("Couter4 Unmounted")
        })
    })

  return (
    <div style={{border:"1px dashed white",
    padding:"10px",
    margin:"20px"
    }}>
        <h1>Counter - 4</h1>
        <h2>Age : {age}</h2>
        <h2>Sibling : {sib}</h2>
        <button onClick={() => {
            getAge((prev) => prev+1)
        }}>GET OLDER</button><button onClick={() => {
            getSib((prev) => prev+1)
        }}>GET A SILING</button>
        <button onClick={() => {
            getAge((prev) => prev*0)
            getSib((prev) => prev*0)
        }}>RESET</button>

    </div>
  )
}
