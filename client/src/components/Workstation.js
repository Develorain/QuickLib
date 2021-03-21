import React, {Component} from "react";
import WorkstationReservationPane from "./WorkstationReservationPane";

export default class Workstation extends Component {
    render() {
        return (
            <div key={this.props.workstationName}>
                <h4>{this.props.workstationName}</h4>

                {/* <h4>{this.props.hostName} {this.props.time} {this.props.studentName} {this.props.status}</h4> */}

                <WorkstationReservationPane workstationName={this.props.workstationName} 
                    selectedName={this.props.selectedName}
                    selectedDay={this.props.selectedDay}
                    selectedTime={this.props.selectedTime}
                    selectedStatus={this.props.selectedStatus}/>

                {/* <WorkstationReservationPane selectedDay={this.props.selectedDay} workstationID={this.props.workstationID} 
                    hostName={this.props.hostName} time={this.props.time} studentName={this.props.studentName} 
                    reserveName={this.props.reserveName} status={this.props.status}/> */}
            </div>
        );
    }
}