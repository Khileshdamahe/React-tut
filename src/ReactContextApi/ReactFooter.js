import React from "react";
import commonContext from "./commonContext";

class ReactFooter extends React.Component {
    render() {
        return (
            <commonContext.Consumer>
                {
                    ({color})=>(<h1 style={{backgroundColor:color,bottom:0,}}>This is Footer Page</h1>)
                }
            </commonContext.Consumer>
        )
    }
}


export default ReactFooter;