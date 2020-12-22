import React, {Component, Fragment, useState, useEffect} from "react";

import Workstation from "./Workstation";

class LibraryThode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        
        this.fetchWorkstations = this.fetchWorkstations.bind(this);
    }

    componentDidMount() {
        this.fetchWorkstations();
    }

    async fetchWorkstations() {
        const address = "http://localhost:5000/".concat(this.props.library.toLowerCase());
        const response = await fetch(address);
        const items = await response.json();

        console.log(items);
        this.setState({items: items});
    }

    render() {
        return (
            <Fragment>
                <h1>{this.props.library} Workstations</h1>
                <select>
                    <option selected value="9">9-10</option>
                    <option value="10">10-11</option>
                    <option value="11">11-12</option>
                </select>

                {this.state.items.map(item => (
                    <div>
                        <Workstation workstation_id={item.workstation_id} host_name={item.host_name} student_name={item.student_name} status={item.status}/>
                    </div>
                ))}

            </Fragment>
        );
    }
};

export default LibraryThode;