import React from "react";
import commonContext from "./commonContext";

class ReactHeader extends React.Component {
    render() {
        return (
            <commonContext.Consumer>
                {
                    ({color})=>(<h1 style={{backgroundColor:color}}>This is Header Page</h1>)
                }
            </commonContext.Consumer>
        )
    }
}


export default ReactHeader;