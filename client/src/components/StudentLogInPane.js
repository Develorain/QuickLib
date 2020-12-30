import React, {Fragment, useState} from "react";
import {Form, Button} from "react-bootstrap";
import 'bootswatch/dist/darkly/bootstrap.min.css';

const StudentLogInPane = () => {
    const [name, setName] = useState("");
    const [verified, setVerified] = useState(false);
    
    const onLogInForm = async e => {
        e.preventDefault(); // stops the page from refreshing after button click

        console.log(name);

        try {
            const response = await fetch("http://localhost:5000/students");
            const jsonData = await response.json();

            const body = {name};
            console.log(body); // debug

            var studentExists = false;
            for (var i = 0; i < jsonData.length; i++) {
                if (jsonData[i].name === name) {
                    studentExists = true;
                }
            }

            studentExists ? setVerified(true) : setVerified(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1>Log In</h1>

            <Form onSubmit={onLogInForm}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John" onChange={e => setName(e.target.value)}/>
                </Form.Group>

                <Button type="submit">Log In</Button>
            </Form>

            <h4>{verified ? "true" : "false"}</h4>
        </Fragment>
    );
};

export default StudentLogInPane;