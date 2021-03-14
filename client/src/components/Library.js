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
        // await this.fetchWorkstationsNew();
        // console.log(this.state.selectedDay);
        // console.log(this.state.items);

        // this.update();
    }

    handleTime = async e => {
        await this.setState({selectedTime: e.target.value});
        // this.update();
    }

    handleStatus = async e => {
        await this.setState({selectedStatus: e.target.value});
        // this.update();
    }

    handleSubmit = async e => {
        e.preventDefault();

        console.log("SUBMIT CLICKED");
        await this.fetchWorkstationsNew();
    }
    
    // http://localhost:5000/gets/getworkstations?reserved=true&library_name=thode&reservation_time=9&reservation_day=monday
    fetchWorkstationsNew = async () => {
        var libraryName = "thode";
        var reservationDay = this.state.selectedDay;
        var reservationTime = this.state.selectedTime;
        var reserved;

        if (this.state.selectedStatus === "Available") {
            reserved = "false";
        } else {
            reserved = "true";
        }

        const address = "http://localhost:5000/gets/getworkstations?reserved="+reserved+"&library_name="+libraryName+"&reservation_time="+reservationTime+"&reservation_day="+reservationDay;
        console.log("addr: " + address);
        const response = await fetch(address);
        console.log("resp: " + response);
        const items = await response.json();
        console.log("itms: " + items);

        console.log(address);
        console.log(items);
        
        this.setState({items: items});
    }
    
    // fetchWorkstations = async () => {
    //     const address = "http://localhost:5000/".concat(this.state.selectedDay);
    //     const response = await fetch(address);
    //     const items = await response.json();
        
    //     console.log(address); // debug

    //     this.setState({items: items});
    // }

    // pretty sure this whole function is useless now
    update = async () => {
        var items = this.state.items;
        var time = this.state.selectedTime;
        var status = this.state.selectedStatus;

        var temp = [];
        items.forEach(async function(entry) {
            if (time === entry.time) { //entry.status === status && 
                temp.push(entry);
            }
        });

        console.log("pog23232");
        console.log(items);
        console.log(time);
        console.log(status);

        await this.setState({displayedItems: items});  //displayedItems: temp
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

                {/* {this.state.displayedItems.map(item => (
                    <div key={item.workstation_name}>
                        <Workstation workstationName={item.workstation_name}/>
                    </div>
                ))} */}
                
                {/* {this.state.displayedItems.map(item => (
                    <div key={item.workstationID}>
                        <Workstation workstationID={item.workstation_id} hostName={item.host_name} time={item.time} studentName={item.student_name} 
                        reserveName={this.state.reserveName} status={item.status} selectedDay={this.state.selectedDay}/>
                    </div>
                ))} */}
            </Fragment>
        );
    }
};

