import React, {Component, Fragment} from "react";
import {Form} from "react-bootstrap";
import 'bootswatch/dist/darkly/bootstrap.min.css';

import Workstation from "./Workstation";
import WorkstationFilterPane from "./WorkstationFilterPane";

export default class Library extends Component {
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

    handleDay = async e => {
        await this.setState({selectedDay: e.target.value});
        await this.fetchWorkstations();

        this.update();
    }

    handleTime = async e => {
        await this.setState({selectedTime: e.target.value});
        this.update();
    }

    handleStatus = async e => {
        await this.setState({selectedStatus: e.target.value});
        this.update();
    }

    handleReserveName = async e => {
        await this.setState({reserveName: e.target.value});
    }
    
    fetchWorkstations = async () => {
        const address = "http://localhost:5000/".concat(this.state.selectedDay);
        const response = await fetch(address);
        const items = await response.json();
        
        console.log(address); // debug

        this.setState({items: items});
    }

    update = async () => {
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

                <WorkstationFilterPane handleDay={this.handleDay} handleTime={this.handleTime} handleStatus={this.handleStatus}
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