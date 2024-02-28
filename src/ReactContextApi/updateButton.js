import React from "react";
import commonContext from "./commonContext";

class UpdateButton extends React.Component {
    render() {
        return (
            <commonContext.Consumer>
                {
                    ({ updateColor }) => (<div>
                        <button onClick={() => updateColor('yellow')}>Button click me</button>
                        <button onClick={() => updateColor('green')}>Button click me</button>
                        <button onClick={() => updateColor('gray')}>Button click me</button>
                    </div>)
                }
            </commonContext.Consumer>
        )
    }
}


export default UpdateButton;