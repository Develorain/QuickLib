import React, {Component} from "react";
import ReserveWorkstation from "./ReserveWorkstation";


// add modal to reserve button 1:07:00 in the vid
// make reserveWorkstation do stuff! 
class Workstation extends Component {
    render() {
        return (
            <div key={this.props.workstation_id}>
                <h4>{this.props.host_name} {this.props.time} {this.props.student_name} {this.props.status}</h4>
                <ReserveWorkstation workstation_id={this.props.workstation_id} host_name={this.props.host_name} time={this.props.time} student_name={this.props.student_name} status={this.props.status}/>
            </div>
        );
    }
}

export default Workstation;