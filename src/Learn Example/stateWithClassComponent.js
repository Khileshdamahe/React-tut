import React from "react";

class App5 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={ ()=>this.setState({ count: this.state.count + 1, })}>increase count by 1</button>
            </div >
        )
    }
}

export default App5;