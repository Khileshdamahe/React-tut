import React from "react";
import Student from "./student";
class App28 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: true,
        }
    }

    render() {
        console.warn("called render 2nd");  // render called  2nd
        return (

            <div>
                <h1>LifeCycle Method {this.state.count}</h1>
                {
                    this.state.count ? <Student /> : null
                }
                <button onClick={() => this.setState({ count: !this.state.count })}>Toggle</button>
            </div>
        )
    }
}
export default App28;