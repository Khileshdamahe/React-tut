import React from "react";
const App23 = () => {
    return (
        <div>
            <h1>HigherOrder Component  atleast two component required</h1>
            <h1>it takes a component as input and return modified component with advanced feature</h1>
            <HOC cmp={Com} />
            <HOC cmp={Com} />
            <HOC cmp={Com} />

        </div>

    )
}




function Com() {
    return (
        <div>
            <input type="text" />
            <button>Submit</button>
        </div>
    )
}
function HOC(props) {
    return (
        <div style={{ backgroundColor: "grey" }}>
            <h1><props.cmp /></h1>
            <h1>High order</h1>
        </div>
    )
}
export default App23;