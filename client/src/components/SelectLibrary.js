import React, {Component} from "react";

class SelectLibrary extends Component {
    handleClick = (e) => {
        console.log(e.target.innerHTML);
    }

    render() {
        return (
                <div>
                    <h1>Welcome to QuickLib</h1>
                    <p>Select a library to book at</p>

                    <div id="container">
                        <button className="libraryButton" onClick={(e) => this.handleClick(e)}>Thode</button>
                        <div className="divider"/>
                        <button className="libraryButton" onClick={(e) => this.handleClick(e)}>Mills</button>
                        <div className="divider"/>
                        <button className="libraryButton" onClick={(e) => this.handleClick(e)}>Innis</button>
                    </div>
                </div>
        );
    }
}

export default SelectLibrary;