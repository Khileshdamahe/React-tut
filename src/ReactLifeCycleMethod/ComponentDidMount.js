import React from "react";

class App26 extends React.Component{
    constructor(){
        super();
        console.warn("constructor called first"); // constructor is called first 1
    }
    componentDidMount(){
        console.warn("componentdidmount called 3")   // called componentDidMount third 3
    }
    render(){
        console.warn("called rende 2nd");  // render called second
        return(
        
            <div>
                <h1>LifeCycle Method constructor ,render,componentDidMount</h1>
            </div>
        )
    }
}
export default App26;