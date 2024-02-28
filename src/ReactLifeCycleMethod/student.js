import React from "react";

class Student extends React.Component {
    componentWillUnmount(){
        console.warn("conmponentDidUnmount Called ");
    }
    render() {
        return (
            <div>
                <h1>Student Component ComponentWillUnmount</h1>
            </div>
        )
    }
}

export default Student;