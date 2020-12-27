import React, {Component} from "react";
import ReserveWorkstation from "./ReserveWorkstation";

class Workstation extends Component {
    render() {
        return (
            <div key={this.props.workstationID}>
                <h4>{this.props.hostName} {this.props.time} {this.props.studentName} {this.props.status}</h4>

                <ReserveWorkstation selectedDay={this.props.selectedDay} workstationID={this.props.workstationID} 
                hostName={this.props.hostName} time={this.props.time} studentName={this.props.studentName} reserveName={this.props.reserveName} status={this.props.status}/>
            </div>
        );
    }
}

export default Workstation;