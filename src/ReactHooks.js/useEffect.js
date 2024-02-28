import React, { useEffect, useState } from "react";

const App24=()=>{

    const [count,setCount]=useState(0);
    const [item,setItem]=useState(0);

    // useEffect(()=>console.warn("usEffect called"));
    // useEffect(()=>console.warn("usEffect called"),[]);
    // useEffect(()=>console.warn("usEffect called"),[count]);  // it will run on count update
    // useEffect(()=>console.warn("usEffect called"),[item]); // it will run on item update
    useEffect(()=>console.warn("usEffect called"),[item,count]) //it will run on both states update
    return(
        <div>
            <h1>UseEffect</h1>
            <h1>when it is passes without araay[] without dependency only callback it will render on each call</h1>
            <h1>when with empty array[] it will render only on mounting</h1>
            <h1>{count}</h1>
            <h1>{item}</h1>
            <button onClick={()=>setCount(count+1)}>update Count</button>
            <button onClick={()=>setItem(item+1)}>update item</button>
        </div>

    )
}

export default App24;