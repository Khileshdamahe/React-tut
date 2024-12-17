import React from "react";
//on click you need to display alert box
const App3 = () => {
    function click() {
        alert("khilesh has clicked the button");
    }
    return (
        <>
            <h1>Click Event</h1>
            <button onClick={click}>Click</button>
        </>
    )
}


export default App3;
