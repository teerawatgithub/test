const express = require('express');
const app = express.Router();
var bodyParser = require('body-parser')
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = "mongodb://admin:admin123@ds145669.mlab.com:45669/ooad";
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var user = {
            "username": req.body.username,
            "password": req.body.password,
        }
        console.log(user)
        dbo.collection('user').find(user).count((err, result) => {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                console.log(result)
                if (result > 0) {
                    res.send('true')
                } else {
                    res.send('false')
                }
            }
        })
    });
})
module.exports = app;