import React, { useState } from "react";

const App21=()=>{
    let [val,setVal] = useState("");
    return(
        <div>
            <h1>Controlled Component are controlled using react state</h1>
            <h1>{val}</h1>
            <input type="text"value={val} onChange={(e)=>setVal(e.target.value)} />
        </div>

    )
}

export default App21;