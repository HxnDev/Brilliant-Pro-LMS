// required dependencies
const cors = require('cors');
const mongo = require('mongodb');
const express = require('express');
const {ObjectId} = require("mongodb");

// connect to express
const app = express();
app.set('port', process.env.PORT || 3001);
app.use(cors());

// connect to mongodb
const url = "mongodb://localhost:27017";
const dbName = "brilliant-pro";
const MongoClient = mongo.MongoClient;
const mongoClient = new MongoClient(url);

// get a learner
app.post('/getLearner', function (req, res) {
    let query = {email: req.query.email}

    mongoClient.connect(function (err, client) {
        const db = client.db(dbName);

        db.collection("learners")
            .find(query)
            .toArray(function (err, items) {
                if (err) throw err;
                res.send(items[0]);
            });
    })
})

// set up server
module.exports = app;
app.listen(3001, () =>
    console.log('Listening on port 3001'));
