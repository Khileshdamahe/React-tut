import React, { useState } from "react";

const App11 = () => {
    const [check, setCheck] = useState(3);
    return (
        <div>
            {
                (check === 1) ? <h1>welcome user1</h1>
                    : (check === 2) ? <h1>welcome user2</h1>
                        : <h1>welcome guest</h1>
            }
        </div>

    )
}

export default App11;