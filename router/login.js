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
        dbo.collection("user").find(user).toArray(function (err, result) {
            if (err) {
                res.sendStatus(404)
                console.log(result)
            } else {
                console.log(result)
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send('false')
                }
            }
        })
    });
})

app.post("/updateStudents", (req, res) => {
    console.log("malaw")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ooad");
        var query_ID = { student_ID : "59160069" }
        var update = {
            $set:
            {
                firstName : "teerawat"
            }
        }
        // console.log(user)
        dbo.collection("Students").updateOne(query_ID, update, function (err, result) {
            if (err) return next(err);
            console.log(result)
           // res.send('Product udpated.');
        });
    });
})
module.exports = app;