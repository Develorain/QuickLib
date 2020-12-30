import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import StudentLogInPane from "./components/StudentLogInPane";
import LibrarySelectionPane from "./components/LibrarySelectionPane";
import Library from "./components/Library";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact><LibrarySelectionPane/></Route>
                    <Route path="/login"><StudentLogInPane/></Route>
                    <Route path="/thode"><Library/></Route>
                </Switch>
            </div>
        </Router>
    );
}