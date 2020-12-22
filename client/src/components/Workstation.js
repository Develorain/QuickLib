import React, {Component} from "react";

class Workstation extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h4 key={this.props.workstation_id}>{this.props.host_name} {this.props.student_name} {this.props.status}</h4>
            </div>
        );
    }
}

export default Workstation;