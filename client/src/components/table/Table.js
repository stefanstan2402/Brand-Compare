import React, { useState, useEffect } from 'react';
import Tablerow from '../tablerow/Tablerow';

const Table = (props) => {

    const [brands, setBrands] = useState([]);
    let data = props.date;
    let followers = [];
    let engagement = [];

    useEffect(() => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer API_KEY_TEST");

        var raw = JSON.stringify({
            "id": "1",
            "method": "socialinsider_api.get_brands",
            "params": {
                "projectname": "API_test"
            }
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };

        fetch("http://localhost:3001/requests", requestOptions)
            .then(response => response.json())
            .then(res => setBrands(res.result));
    });



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
                <tbody>
                    {brands.map((value, index) => {
                        return <Tablerow
                            index={index + 1}
                            name={value.brandname}
                            profiles={value.profiles.length}
                        // followers={followers[index]}
                        // engagement={engagement[index]}
                        />;
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Table;