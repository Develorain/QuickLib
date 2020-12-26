import React, {Fragment, useState, useEffect} from "react";
import {withRouter} from "react-router-dom";

const Reserve = (props) => {
    const [studentName, setStudentName] = useState("");
    const [hostName, setHostName] = useState("");
    const [time, setTime] = useState("");
    const [status, setStatus] = useState("");

    const onReserve = async e => {
        e.preventDefault();

        console.log("PROPS: ", props.propsTime);

        try {
            //var day = this.state.selectedDay;
            const address = "http://localhost:5000/monday";
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

                <label>Time (temp)</label>
                <input type="text" value={time} onChange={e => setTime(e.target.value)}/>

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

export default Reserve;