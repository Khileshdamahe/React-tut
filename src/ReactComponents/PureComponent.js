import React from "react";

class App25 extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1,
        }
    }

    render() {
        console.warn("user component added");  // this will not render until count get updated and wont render without any change
        return (
            <div>
                <h1>Pure Component in class {this.state.count}</h1>
                <h1>this will not render until count get updated and wont render without any change even if event get clicked</h1>
                <button onClick={() => this.setState({ count: this.state.count })}>Update</button>
            </div>
        )

    }
}
export default App25;