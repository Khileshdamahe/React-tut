import React from "react";
import commonContext from "./commonContext";
import Main from "./Main";
import UpdateButton from "./updateButton";
import ReactHeader from "./ReactHeader";
import ReactFooter from "./ReactFooter";
class App34 extends React.Component {
    constructor() {
        super();
        this.updateColor = (color) => {
            this.setState({
                color: color
            })
        }
        this.state = {
            color: 'red',
            updateColor: this.updateColor
        }
    }
    render() {
        return (
            <commonContext.Provider value={this.state}>
                <ReactHeader />
                <h1>This is context Api</h1>
                <Main />
                <UpdateButton />
                <ReactFooter />
            </commonContext.Provider>
        )
    }
}


export default App34;