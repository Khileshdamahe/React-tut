import React from "react";
import { Button } from "react-bootstrap";

const App33 = () => {
    return (
        <div>
            <h1>React bootstrap</h1>
            <Button>ReactButton</Button>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>


            
            <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
            <Button as="input" type="button" value="Input" />{' '}
            <Button as="input" type="submit" value="Submit" />{' '}
            <Button as="input" type="reset" value="Reset" />
        </div>

    )
}

export default App33;