import React, { useEffect, useState } from "react";

const Counter2 = () => {
    const [currAge, setCurrAge] = useState(19)
    const [currSib, setCurrSib] = useState(1)
    
    useEffect(() => {
        console.log("Counter2 mounted")
    },[ ])

    return(
        <div style={{border:"1px dashed white",
        padding:"10px",
        margin:"20px"
        }}>
            <h1>COUNTER 2</h1>
            <h2>My current age is {currAge}</h2>
            
            <h2>I have {currSib} siblings</h2>
            <button onClick={() => {
                setCurrAge(currAge+1)
            }}>Get Older</button>
            <button onClick={() => {
                setCurrSib(currSib+1)
            }}>GET SIBLING</button>
            <button onClick={() => {
                setCurrSib(currSib-1)
            }}>KILL A SIBLING</button>
        </div>
    )
}
 export default Counter2