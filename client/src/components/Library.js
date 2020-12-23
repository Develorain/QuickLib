import React, {Component, Fragment, useState, useEffect} from "react";

import Workstation from "./Workstation";

class LibraryThode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            displayedItems: [],
            selectedDay: "none",
            selectedTime: "none",
            selectedStatus: "none"
        };
        
        this.fetchWorkstations = this.fetchWorkstations.bind(this);
        this.handleDay = this.handleDay.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
    }

    async fetchWorkstations(day) {
        const address = "http://localhost:5000/".concat(day);
        console.log("address:", address);
        const response = await fetch(address);
        const items = await response.json();

        this.setState({items: items});
    }

    async handleDay(e) {
        await this.setState({selectedDay: e.target.value});
        await this.fetchWorkstations(this.state.selectedDay);

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

    async update() {
        var time = this.state.selectedTime;
        var status = this.state.selectedStatus;
        var items = this.state.items;
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
                <select defaultValue={this.state.selectedDay} onChange={this.handleDay}>
                    <option value="none">None</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                </select>

                <select defaultValue={this.state.selectedTime} onChange={this.handleTime}>
                    <option value="none">None</option>
                    <option value="9">9-10</option>
                    <option value="10">10-11</option>
                    <option value="11">11-12</option>
                    <option value="12">12-1</option>
                    <option value="1">1-2</option>
                    <option value="2">2-3</option>
                    <option value="3">3-4</option>
                    <option value="4">4-5</option>
                </select>

                <select defaultValue={this.state.selectedStatus} onChange={this.handleStatus}>
                    <option value="none">None</option>
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                </select>

                <label>Name</label>
                <input type="text"/>

                <label>Time (temp)</label>
                <input type="text"/>

                <label>Student ID</label>
                <input type="text"/>

                <label>Host Name (temp)</label>
                <input type="text"/>

                <button>Reserve</button>

                {this.state.displayedItems.map(item => (
                    <div>
                        <Workstation workstation_id={item.workstation_id} host_name={item.host_name} time={item.time} student_name={item.student_name} status={item.status}/>
                    </div>
                ))}

            </Fragment>
        );
    }
};

export default LibraryThode;