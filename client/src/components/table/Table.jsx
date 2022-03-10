import React from "react";

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: this.props.date,
            brands: [],
            fans: [],
            engagement: []
        };
    }

    getInitialBrandDate() {
        console.log("refreshed page");
        var myheaders = new Headers();
        myheaders.append("Content-Type", "application/json\n");
        myheaders.append("Authorization", "Bearer API_KEY_TEST");

        var raw = JSON.stringify({"id":"1","method":"socialinsider_api.get_brands","params":{"projectname":"API_test"}});
    
        var requestOptions = {
            method: 'POST',
            headers: myheaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:3001/requests", requestOptions)
            .then(response => response.json())
            .then(json => json.result)
            .then(res => this.setState({ 'brands': res }));

    }

    render() {
        return (
            <div>
                <table className="table table-hover ">
                    <thead>
                        <tr className="table-warning">
                            <th scope="col">Nr.</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Total Profiles</th>
                            <th scope="col">Total Fans</th>
                            <th scope="col">Total Engagement</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default Table;