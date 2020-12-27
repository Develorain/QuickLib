import React, {Fragment, useState} from "react";

const ReserveMenu = (props) => {
    const [studentName, setStudentName] = useState("");
    const [hostName, setHostName] = useState("");
    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");

    const onReserve = async e => {
        e.preventDefault();

        try {
            const address = "http://localhost:5000/".concat(this.props.selectedDay);
            const body = {hostName, time, studentName, status};
            console.log(body);
            
            const response = await fetch(address, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <form onSubmit={onReserve}>
                <label>Name</label>
                <input type="text" value={studentName} onChange={e => setStudentName(e.target.value)}/>

                <label>Time (useless)</label>
                <input type="text" value={props.selectedTime}/>

                <label>Host Name (temp)</label>
                <input type="text" value={hostName} onChange={e => setHostName(e.target.value)}/>

                <label>Status (temp)</label>
                <input type="text" value={status} onChange={e => setStatus(e.target.value)}/>

                <button>Reserve</button>
            </form>

            <h2>{studentName}</h2>
            <h2>{hostName}</h2>
        </Fragment>
    );
};

export default ReserveMenu;