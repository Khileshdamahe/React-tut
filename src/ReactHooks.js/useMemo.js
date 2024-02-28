import React, { useState, useMemo } from "react";

const App14 = () => {
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(1);
    // function calculation(){
    //     console.warn("I am rendering on each render");
    //     return count*5;

    // }

    const useMemoExample = useMemo(function calculation() {
        console.warn("I am rendering on count update");
        return count * 5;

    }, [count])    //it will run only if count update 

    return (
        <div>
            <h1>useMemo example by khilesh ,used to remeber the complex calculation to
                avoid unwanted render and render only on call if it get updated</h1>
            <h1>{count}</h1>
            <h1>{item}</h1>
            <h1>{useMemoExample}</h1>
            <button onClick={() => setCount(count + 1)} >Update Count</button>
            <button onClick={() => setItem(item + 1)} >Update Item</button>
        </div>

    )
}

export default App14;