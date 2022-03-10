import React, { Component } from "react";
import "./App.css";
import DatePicker from "./components/datepicker/DatePicker";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="text-yellow">Brand Compare</h1> 
                <DatePicker/>
            </div>
        );
    }
}

export default App;
