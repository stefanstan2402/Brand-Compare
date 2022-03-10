const express = require('express');
var Request = require("request");


module.exports = {
    getBrands: (req, res) => {
        const { method, params } = req.body;
        Request.post({
            "headers": {
                "Content-Type": "application/json",
                "Authorization": "Bearer API_KEY_TEST"
            },
            "url": "https://app.socialinsider.io/api",
            "body": JSON.stringify({
                "jsonrpc": "2.0",
                "id": 0,
                "method": method,
                "params": params
            })
        }, (error, response, body) => {
            if(error) {
                return res.status(400).json({error: {message: 'bad request'}});
            }
            return res.status(200).json(JSON.parse(body))
        });
    }
}
