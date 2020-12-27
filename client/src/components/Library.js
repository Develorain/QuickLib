import React, {Component, Fragment} from "react";
import ReserveMenu from "./ReserveMenu";

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
            selectedStatus: "none"
        };

        this.handleDay = this.handleDay.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
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

                <DayTimeStatusSelector handleDay={this.handleDay} handleTime={this.handleTime} handleStatus={this.handleStatus}
                 selectedDay={this.state.selectedDay} selectedTime={this.state.selectedTime} selectedStatus={this.state.selectedStatus}/>
                
                <ReserveMenu selectedDay={this.state.selectedDay} selectedTime={this.state.selectedTime}/>

                {this.state.displayedItems.map(item => (
                    <div key={item.workstation_id}>
                        <Workstation workstation_id={item.workstation_id} host_name={item.host_name} time={item.time} student_name={item.student_name} status={item.status}/>
                    </div>
                ))}
            </Fragment>
        );
    }
};

export default Library;