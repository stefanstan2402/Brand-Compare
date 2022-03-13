import React from 'react';
import "./Tablerow.css";

class Tablerow extends React.Component {    
    render() {
        return (
            <tr className="table-warning">
                <td>{this.props.index}</td>
                <td>{this.props.name}</td>
                <td>{this.props.profiles}</td>
                <td>{this.props.fans}</td>
                <td>{this.props.engagement}</td>
            </tr>
        )
    }
}

export default Tablerow;