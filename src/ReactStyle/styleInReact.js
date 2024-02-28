import React from "react";
import './normal.css';
import style from './custom.module.css';      // we are putting style as a name for custom file and accessing it via style
function App32() {
    return (
        <div>
            <h1 style={{ color: 'red', backgroundColor: 'gray', }}>style type 1 inline style</h1>
            <h1 className="primary">style type 2 Normal css file </h1>
            <h1 className={style.success}>style type 3 modular css</h1>
        </div>
    )
}

export default App32;