import React, {Fragment, useState} from "react";
import {withRouter} from "react-router-dom";

const LogInStudent = () => {
    const [name, setName] = useState("");
    const [verified, setVerified] = useState("false");

    const onLogInForm = async e => {
        e.preventDefault();

        console.log(withRouter.history);

        try {
            const response = await fetch("http://localhost:5000/students");
            const jsonData = await response.json();

            const body = {name};
            console.log(body);

            var studentExists = false;
            for (var i = 0; i < jsonData.length; i++) {
                if (jsonData[i].name === name) {
                    studentExists = true;
                }
            }

            if (studentExists) {
                setVerified("true");
            } else {
                setVerified("false");
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1>Log In</h1>
            <form onSubmit={onLogInForm}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button>Log In</button>
                <h4>{verified}</h4>
            </form>
        </Fragment>
    );
};

export default LogInStudent;