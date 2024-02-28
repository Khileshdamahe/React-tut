import React, { useState } from "react";
const App12 = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [E, setE] = useState(false);
    const [F, setF] = useState(false);


    function getForm(e) {
        e.preventDefault();
        if (id.length > 3 && password.length > 3) {
            alert("all good")
            console.warn(id, password);
        } else {
            alert("enter correct value")
        }



    }
    function getId(e) {
        const value = e.target.value;
        if (value.length > 3) {
            setF(true);
        }
        else {
            setF(false)
        }
        setId(value);

    }

    function getPassword(e) {
        const value = e.target.value;
        if (value.length > 3) {
            setE(true);
        }
        else {
            setE(false)
        }
        setPassword(value);

    }
    return (
        <div>
            <h1>Form Validation ,HTML FORM </h1>
            <h2>{id},{password}</h2>
            <form onSubmit={getForm}>
                <input type="text" placeholder="Enter User Id" value={id} onChange={getId} />{F ? null : <span>Enter Correct Id</span>}<br /><br />
                <input type="password" placeholder="Enter Password" value={password} onChange={getPassword} />{E ? null : <span>Enter Correct Password</span>}<br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}
export default App12;