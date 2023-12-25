import React from "react";
import { useState } from "react";


const Counter3 = () => {
    const [data,setData] = useState({age: 20, sibling: 3})
    return(
        <div style={{border:"1px dashed white",
        padding:"10px",
        margin:"20px"
        }}>
            <h1>Counter 3</h1>
            <h2>My age : {data.age}</h2>
            <h2>My Siblings : {data.sibling}</h2>
            <button onClick={() => {
                setData({
                    ...data,
                    age:data.age + 1
                })
            }}>Get Older</button>
            <button onClick={() => {
                setData({
                    ...data,
                    sibling: data.sibling  + 1
                })
            }}>Get A Sibling</button>
        </div>
    )
}

export default Counter3