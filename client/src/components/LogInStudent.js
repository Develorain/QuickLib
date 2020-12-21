import React, {Fragment, useState, useEffect} from "react";
import {withRouter} from "react-router-dom";

const LogInStudent = () => {
    const [name, setName] = useState("");

    const onLogInForm = async e => {
        e.preventDefault();

        console.log(withRouter.history);

        try {
            const response = await fetch("http://localhost:5000/students");
            const jsonData = await response.json();

            var studentExists = false;
            for (var i = 0; i < jsonData.length; i++) {
                if (jsonData[i].name === name) {
                    studentExists = true;
                }
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1>Welcome to QuickLib</h1>
            <form onSubmit={onLogInForm}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <button>Log In</button>
            </form>
        </Fragment>
    );
};

export default LogInStudent;