import React, {Fragment, useState} from "react";

const LogInStudent = () => {
    const [name, setName] = useState("");

    const onLogInForm = async e => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/students");
            const jsonData = await response.json();

            //console.log(jsonData);

            var flag = false;
            for (var i = 0; i < jsonData.length; i++) {
                if (jsonData[i].name === name) {
                    flag = true;
                }
            }
            console.log(flag);
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