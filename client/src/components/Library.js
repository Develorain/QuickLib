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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReserveName = this.handleReserveName.bind(this);
    }

    handleReserveName = async e => {
        await this.setState({reserveName: e.target.value});
    }

    handleDay = async e => {
        await this.setState({selectedDay: e.target.value});
    }

    handleTime = async e => {
        await this.setState({selectedTime: e.target.value});
    }

    handleStatus = async e => {
        await this.setState({selectedStatus: e.target.value});
    }

    handleSubmit = async e => {
        e.preventDefault();

        console.log("SUBMIT CLICKED");
        await this.fetchWorkstations();
    }
    
    // http://localhost:5000/gets/getworkstations?reserved=true&library_name=thode&reservation_time=9&reservation_day=monday
    fetchWorkstations = async () => {
        var libraryName = "thode"; // temporarily hard coded to thode for now for simplicity of implementation
        var reservationDay = this.state.selectedDay;
        var reservationTime = this.state.selectedTime;
        var reserved;

        if (this.state.selectedStatus === "Available") {
            reserved = "false";
        } else {
            reserved = "true";
        }

        const address = "http://localhost:5000/gets/getworkstations?reserved="+reserved+"&library_name="+libraryName+"&reservation_time="+reservationTime+"&reservation_day="+reservationDay;
        // console.log("addr: " + address);
        const response = await fetch(address);
        // console.log("resp: " + response);
        const items = await response.json();
        // console.log("itms: " + items);
        // console.log(address);
        // console.log(items);
        
        this.setState({items: items});
    }

    render() {
        return (
            <Fragment>
                <h1>Workstations</h1>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John" onChange={this.handleReserveName}/>
                </Form.Group>

                <WorkstationFilterPane handleDay={this.handleDay} handleTime={this.handleTime} handleStatus={this.handleStatus} handleSubmit={this.handleSubmit}
                    selectedDay={this.state.selectedDay} selectedTime={this.state.selectedTime} selectedStatus={this.state.selectedStatus}/>
                
                {this.state.items.map(item => (
                    <div key={item.workstation_name}>
                        <Workstation workstationName={item.workstation_name}/>
                    </div>
                ))}
            </Fragment>
        );
    }
};

