import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

import LogInStudent from "./components/LogInStudent";
import ListStudents from "./components/ListStudents";
import SelectLibrary from "./components/SelectLibrary";
import LibraryThode from "./components/LibraryThode";
import LibraryMills from "./components/LibraryMills";
import LibraryInnis from "./components/LibraryInnis";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={LogInStudent}/>
                    <Route path="/library" component={SelectLibrary}/>
                    <Route path="/thode" component={LibraryThode}/>
                    <Route path="/mills" component={LibraryMills}/>
                    <Route path="/innis" component={LibraryInnis}/>
                    <Route path="/students" component={ListStudents}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;