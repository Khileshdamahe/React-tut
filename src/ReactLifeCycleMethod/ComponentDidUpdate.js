import React from "react";
class App27 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    shouldComponentUpdate() {
        console.warn(" shouldComponentUpdate called 1st")
        return true;
    }

    componentDidUpdate() {
        console.warn("componentDidUpdate Called 3rd")
    }
    render() {
        console.warn("called render 2nd");  // render called  2nd
        return (

            <div>
                <h1>LifeCycle Method {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>update Count</button>
            </div>
        )
    }
}
export default App27;