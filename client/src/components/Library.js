import React, {Component, Fragment} from "react";
import {Form} from "react-bootstrap";

import 'bootswatch/dist/darkly/bootstrap.min.css';

import Workstation from "./Workstation";
import DayTimeStatusSelector from "./DayTimeStatusSelector";

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            displayedItems: [],
            selectedDay: "none",
            selectedTime: "none",
            selectedStatus: "none",
            reserveName: ""
        };

        this.handleDay = this.handleDay.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleReserveName = this.handleReserveName.bind(this);
    }

    async handleDay(e) {
        await this.setState({selectedDay: e.target.value});
        await this.fetchWorkstations();

        this.update();
    }

    async handleTime(e) {
        await this.setState({selectedTime: e.target.value});
        this.update();
    }

    async handleStatus(e) {
        await this.setState({selectedStatus: e.target.value});
        this.update();
    }

    async handleReserveName(e) {
        await this.setState({reserveName: e.target.value});
    }
    
    async fetchWorkstations() {
        const address = "http://localhost:5000/".concat(this.state.selectedDay);
        console.log(address);
        const response = await fetch(address);
        const items = await response.json();

        this.setState({items: items});
    }

    async update() {
        var items = this.state.items;
        var time = this.state.selectedTime;
        var status = this.state.selectedStatus;
        var temp = [];
        items.forEach(async function(entry) {
            if (entry.status === status && time === entry.time) {
                temp.push(entry);
            }
        });

        await this.setState({displayedItems: temp});
    }

    render() {
        return (
            <Fragment>
                <h1>Workstations</h1>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John" onChange={this.handleReserveName}/>
                </Form.Group>

                <DayTimeStatusSelector handleDay={this.handleDay} handleTime={this.handleTime} handleStatus={this.handleStatus}
                 selectedDay={this.state.selectedDay} selectedTime={this.state.selectedTime} selectedStatus={this.state.selectedStatus}/>

                {this.state.displayedItems.map(item => (
                    <div key={item.workstationID}>
                        <Workstation workstationID={item.workstation_id} hostName={item.host_name} time={item.time} studentName={item.student_name} 
                        reserveName={this.state.reserveName} status={item.status} selectedDay={this.state.selectedDay}/>
                    </div>
                ))}
            </Fragment>
        );
    }
};

export default Library;
// value={studentName} onChange={e => setStudentName(e.target.value)}