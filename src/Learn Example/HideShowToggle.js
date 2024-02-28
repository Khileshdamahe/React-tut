import React, { useState } from "react";

const App9 = () => {
    const [status, setStatus] = useState(true);
    return (
        <div>
            {
                status ? <h1>Hello World!</h1> : null
            }
            <button onClick={() => setStatus(!status)}>Toggle(hide/show)</button>
        </div>
    )
}
export default App9;