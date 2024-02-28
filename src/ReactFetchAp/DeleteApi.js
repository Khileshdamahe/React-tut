import React, { useEffect, useState } from 'react'
function App31() {
    const [users, setUser] = useState([])
    useEffect(() => getList(), [])

    function getList(){
        fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                setUser(resp)
            })
        })            // for refreshing the data
    }
    function DeleteUser(item) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${item}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getList();   /// for refreshing the data

            })
        })

    }
    return (
        <div >
            <h1>Get API Call </h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>UserID</td>
                        <td>id</td>
                        <td>title</td>
                        <td>body</td>
                    </tr>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>
                                    <button onClick={() => DeleteUser(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
}
export default App31;