import React, { useEffect, useState } from 'react'
function App30() {
    const [userId, setUserId] = useState();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const ClickMe = () => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, title, body })
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)

            })
        })
    }
    return (
        <div >
            <h1>Post API Call </h1>
            <input type='text' value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='Enter UsrId' /><br /><br />
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' /><br /><br />
            <input type='text' value={body} onChange={(e) => setBody(e.target.value)} placeholder='Enter Body' /><br /><br />
            <button type='button' onClick={ClickMe}>Submit</button>

        </div>
    );
}
export default App30;