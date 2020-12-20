import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

function LibraryPage() {
    return (
        <Router>
            <div>
                <h1>Welcome to QuickLib</h1>
                <p>Select a library to book at</p>

                <div id="container">
                    <NavLink exact to="/thode"><button>Thode</button></NavLink>
                    <div class="divider"/>
                    <NavLink exact to="/mills"><button>Mills</button></NavLink>
                    <div class="divider"/>
                    <NavLink exact to="/innis"><button>Innis</button></NavLink>
                </div>
            </div>
        </Router>
    );
}

export default LibraryPage;