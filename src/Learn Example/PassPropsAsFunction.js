import React from "react";

const App13 = (props) => {
    return (
        <div>
            <h1>Pass Function as Props</h1>
            <button onClick={()=>props.data()} >Submit</button>

        </div>
    )

}
export default App13;


// function data(){
//     alert("Hi All")
//   }
// put it in app 