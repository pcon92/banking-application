
const express = require('express');
const app = express();
const Datastore = require('nedb');

const PORT = process.env.port || 5000;
app.listen(PORT, () => {console.log(`Listening on Port ${PORT}`)})

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/register-user', (req, res) => {
    database.insert({
        email: req.body.email,
        password: req.body.password
    })
    res.json({
        result: 'User added to database'
    });
});