import React, { useState } from "react";

const App10 = () => {
    const [name, setName] = useState("");
    const [pet, setPet] = useState("");
    const [check, setCheck] = useState(false);
    function getData(e) {
        e.preventDefault();
        console.warn(name, pet, check);
    }

    return (
        <div>
            <h1>HTML FORM with check box ,input box ,button and displaying in console{name}</h1>
            <form onSubmit={getData}>
                <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setPet(e.target.value)}>  
                    <option>Select Option</option>    
                    <option>cat</option>
                    <option>dog</option>
                </select><br /><br />  
                <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} /><span>read terms and conditions.</span><br /><br />
                <button type="submit">submit</button>
            </form>
        </div>

    )
}
export default App10;