import React from 'react';
import "./Tablerow.css";

class Tablerow extends React.Component {    
    render() {
        return (
            <tr className="table-warning">
                <td scope="col">{this.props.index}</td>
                <td scope="col">{this.props.name}</td>
                <td scope="col">{this.props.profiles}</td>
                <td scope="col">{this.props.fans}</td>
                <td scope="col">{this.props.engagement}</td>
            </tr>
        )
    }
}

export default Tablerow;