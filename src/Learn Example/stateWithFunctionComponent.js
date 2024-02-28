import React, { useState } from "react";

const App4=()=>{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>increase count by 1</button>
        </div>
    )
}

export default App4;