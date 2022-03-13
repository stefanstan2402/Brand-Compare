import React, { useState, useEffect } from 'react';
import Tablerow from '../tablerow/Tablerow';


const Table = (props) => {

    const [brands, setBrands] = useState([]);

    let data = props.date;
    let dataMS = new Date(data).getTime();
    let today = new Date().toISOString().slice(0, 10);
    let todayMS = new Date(today).getTime();

    let fans = [];
    let engagement = [];
    let sum_fans = 0;
    let sum_engagement = 0;

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

    useEffect(() => {
        brands.forEach(brand => {
            brand.profiles.forEach(profile => {
                let myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Authorization", "Bearer API_KEY_TEST");

                let reqOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify({
                        id: 1,
                        method: "socialinsider_api.get_profile_data",
                        params: {
                            id: profile.id,
                            profile_type: profile.profile_type,
                            date: {
                                start: (dataMS),
                                end: (todayMS),
                                timezone: "Europe/London"
                            }
                        }
                    })
                }

                fetch("http://localhost:3001/requests", reqOptions)
                    .then(response => response.json())
                    .then(response => response.resp)
                    // .then(response => console.log(response))
                    .then(response => {
                        for (var key in response[profile.id]) {
                            let noFans = response[profile.id][key].fans;
                            let noEngagement = response[profile.id][key].engagement;

                            // console.log(noFans);
                            // console.log(" ");
                            // console.log(noEngagement);

                            if (noFans != null) {
                                sum_fans += noFans;
                            }

                            if (noEngagement != null){
                                sum_engagement += noEngagement;
                            }
                        }
                    });
            });
            fans.push(sum_fans);
            engagement.push(sum_engagement);
        })
        console.log(fans);
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
                            fans={fans[index]}
                            engagement={engagement[index]}
                        />;
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default Table;