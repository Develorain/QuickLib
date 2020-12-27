import React, {Fragment, useState} from "react";
import {Form, Button} from "react-bootstrap";

import 'bootswatch/dist/darkly/bootstrap.min.css';

const ReserveMenu = (props) => {
    const [studentName, setStudentName] = useState("");
    const [hostName, setHostName] = useState("");
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");

    const onReserve = async e => {
        e.preventDefault();

        try {
            const address = "http://localhost:5000/".concat(this.props.selectedDay);
            const body = {hostName, time, studentName, status};
            console.log(body);
            
            const response = await fetch(address, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <Form onSubmit={onReserve}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John" value={studentName} onChange={e => setStudentName(e.target.value)}/>
                <Form.Label>Time</Form.Label>
                <Form.Control type="text" placeholder="9" value={props.selectedTime}/>
                <Form.Label>Host Name</Form.Label>
                <Form.Control type="text" placeholder="THODEF1D001" value={hostName} onChange={e => setHostName(e.target.value)}/>
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder="Occupied" value={status} onChange={e => setStatus(e.target.value)}/>
            </Form.Group>

            <Button>Reserve</Button>
            </Form>
            <h2>{studentName}</h2>
            <h2>{hostName}</h2>
        </Fragment>
    );
};

export default ReserveMenu;