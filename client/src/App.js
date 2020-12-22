import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import LogInStudent from "./components/LogInStudent";
import ListStudents from "./components/ListStudents";
import SelectLibrary from "./components/SelectLibrary";
import Library from "./components/Library";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={SelectLibrary}/>
                    <Route path="/login" component={LogInStudent}/>
                    <Route path="/thode">
                        <Library library="Thode"/>
                    </Route>
                    <Route path="/mills">
                        <Library library="Mills"/>
                    </Route>
                    <Route path="/innis">
                        <Library library="Innis"/>
                    </Route>
                    <Route path="/students" component={ListStudents}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;