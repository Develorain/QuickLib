import React, {Component, Fragment} from "react";
import {Form} from "react-bootstrap";

import 'bootswatch/dist/darkly/bootstrap.min.css';

class DayTimeStatusSelector extends Component {
    render() {
        return (
            <Fragment>
                <Form>
                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Day</Form.Label>
                    <Form.Control as="select" size="lg" custom defaultValue={this.props.selectedDay} onChange={this.props.handleDay}>
                    <option value="none">None</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    </Form.Control>
                    
                    <Form.Label>Time</Form.Label>
                    <Form.Control as="select" size="lg" custom defaultValue={this.props.selectedTime} onChange={this.props.handleTime}>
                    <option value="none">None</option>
                    <option value="9">9-10</option>
                    <option value="10">10-11</option>
                    <option value="11">11-12</option>
                    <option value="12">12-1</option>
                    <option value="1">1-2</option>
                    <option value="2">2-3</option>
                    <option value="3">3-4</option>
                    <option value="4">4-5</option>
                    </Form.Control>

                    <Form.Label>Availability</Form.Label>
                    <Form.Control as="select" size="lg" custom defaultValue={this.props.selectedStatus} onChange={this.props.handleStatus}>
                    <option value="none">None</option>
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                    </Form.Control>
                </Form.Group>
                </Form>
            </Fragment>
        );
    }
};

export default DayTimeStatusSelector;