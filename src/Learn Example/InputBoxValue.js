import React, { useState } from "react";

const App8 = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState();
    const [print, setPrint] = useState(false); // if you want to show it on button click;
    return (
        <div>
            {
                print ?

                    <>
                        <h1>Hi My name is {name}</h1>
                        <h1>Hi My age is {age}</h1>
                        <h1>Hi My address is {address}</h1>
                        <h1>Hi My number is {number}</h1>
                    </>
                    : null
            }

            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} /><br />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} /><br />
            <input type="text" value={address} placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} /><br />
            <input type="text" value={number} placeholder="Enter Phone Number" onChange={(e) => setNumber(e.target.value)} /><br />
            <button onClick={() => setPrint(true)} >Click me</button>
        </div>
    )
}

export default App8