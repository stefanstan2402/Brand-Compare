import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Table from "../table/Table";

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            refresh: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        alert("A fost aleasa o data noua!");
        //console.log(event.target.value);
        this.setState({ refresh: true });
    }

    render() {
        return (
            <Router>
                <div className="row pt-5">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="form-group">
                            <input className="form-control" type="date" id="data" onChange={this.handleChange}></input>
                            <br />
                            <Link to="/table"><button type="submit" className="btn btn-warning" value={this.state.value}
                                onSubmit={this.handleChange}>Submit</button></Link>
                        </div>
                    </div>
                    <div className="col-9"></div>
                </div>
                <br />
                <br />

                <Switch>
                    <Route path="/table">
                        <Table date={this.state.value} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default DatePicker;