import React, {Component, Fragment, useState, useEffect} from "react";

import Workstation from "./Workstation";

class LibraryThode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            displayedItems: [],
            selectedDay: "none",
            selectedTime: "none"
        };
        
        this.fetchWorkstations = this.fetchWorkstations.bind(this);
        this.handleDay = this.handleDay.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    /*
    componentDidMount() {
        this.fetchWorkstations("monday");
    }
    */

    async fetchWorkstations(day) {
        const address = "http://localhost:5000/".concat(day);
        const response = await fetch(address);
        const items = await response.json();

        this.setState({items: items});
    }

    async handleDay(e) {
        await this.setState({selectedDay: e.target.value});

        console.log("BEFORE", this.state.selectedDay);
        this.fetchWorkstations(this.state.selectedDay);
        console.log("AFTER", this.state.selectedDay);
    }

    async handleTime(e) {
        await this.setState({selectedTime: e.target.value});
        console.log("SELECTED TIME: ", this.state.selectedTime);

        var temp = []

        this.state.items.forEach(function(entry) {
            if (entry.time === e.target.value) {
                console.log(entry);
                temp.push(entry);
            }
        });

        this.setState({displayedItems: temp});
    }

    render() {
        return (
            <Fragment>
                <h1>Workstations</h1>
                <select defaultValue={this.state.selectedDay} onChange={this.handleDay}>
                    <option value="none">None</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                </select>

                <select defaultValue={this.state.selectedTime} onChange={this.handleTime}>
                    <option value="none">None</option>
                    <option value="9">9-10</option>
                    <option value="10">10-11</option>
                    <option value="11">11-12</option>
                </select>

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