import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";

// components
import LogInStudent from "./components/LogInStudent";
import ListStudents from "./components/ListStudents";
import LibraryPage from "./components/LibraryPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={LogInStudent} />
                    <Route path="/list" component={ListStudents} />
                    <Route path="/library" component={LibraryPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
