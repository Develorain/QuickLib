import React, {Fragment, useState} from "react";
import {Modal, Button} from "react-bootstrap";

import 'bootswatch/dist/darkly/bootstrap.css';

const WorkstationReservationPane = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reserveWorkstation = async () => {
        // try {
        //     const address = "http://localhost:5000/".concat(props.selectedDay);

        //     // Debug
        //     // console.log(address);
        //     // console.log(props.workstationID);
        //     // console.log(props.hostName);
        //     // console.log(props.time);
        //     // console.log(props.reserveName);
        //     // console.log(props.status);
            
        //     const body = {hostName: props.hostName, time: props.time, reserveName: props.reserveName};
        //     // console.log("BODY ",body); // debug

        //     handleClose();

        //     const response = await fetch(address, {
        //         method: "PUT",
        //         headers: {"Content-Type": "application/json"},
        //         body: JSON.stringify(body)
        //     });

        //     // console.log("Response", response); // debug
        // } catch (err) {
        //     console.error(err.message);
        // }
        console.log("Workstation Reserved");
    }
    
    return (
        <Fragment>
            <Button variant="primary" onClick={handleShow}>
                Reserve
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Reservation</Modal.Title>
                </Modal.Header>

                <Modal.Body>Are you sure you want to reserve {props.hostName} at {props.time}?</Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => reserveWorkstation(props.workstationID)}>
                        Reserve
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default WorkstationReservationPane;