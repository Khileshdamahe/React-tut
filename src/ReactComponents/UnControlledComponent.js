import React, { useRef } from "react";
const App22 = () => {

    let inputRef = useRef(null);
    let inputRef2 = useRef(null);
    function getForm(e) {
        e.preventDefault();
        console.warn("inputRef:" + inputRef.current.value);
        console.warn("inputRef2:" + inputRef2.current.value);
        let val = document.getElementById("inputId");
        console.warn("inputId:" + val.value);
    }
    return (
        <div>
            <h1>Uncontrolled Component are those that are controlled using either javascript or ref</h1>
            <h1>it is not controoled directly using state</h1>
            <form onSubmit={getForm}>
                <input type="text" ref={inputRef} />
                <input type="text" ref={inputRef2} />
                <input type="text" id="inputId" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default App22;