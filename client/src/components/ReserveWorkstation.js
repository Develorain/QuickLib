import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

import 'bootswatch/dist/darkly/bootstrap.css';

const ReserveWorkstation = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const reserveWorkstation = async () => {
        try {
            await console.log(props.workstation_id);
        } catch (err) {
            console.error(err.message);
        }

        handleClose();
    }
    
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Reserve
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Reservation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to reserve {props.host_name} at {props.time}?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => reserveWorkstation(props.workstation_id)}>
                    Reserve
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

//render(<ReserveWorkstation/>);
export default ReserveWorkstation;
//<h4>{this.props.host_name} {this.props.time} {this.props.student_name} {this.props.status}</h4>