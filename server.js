
const express = require('express');
const app = express();
const Datastore = require('nedb');
const Joi = require('joi');

const PORT = process.env.port || 5000;
app.listen(PORT, () => {console.log(`Listening on Port ${PORT}`)})

app.use(express.static('public'));
app.use(express.json({limit: '10mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/register-user', (req, res) => {
    
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(3).max(8).required(),
        repeat_password: Joi.ref('password'),
    });
    
    const {error} = schema.validate(req.body);

    error !== undefined 
    ? res.json({status: "error", error})
    :   database.insert({
            email: req.body.email,
            password: req.body.password,
            repeat_password: req.body.repeat_password
        });
        res.json({
            result: 'User added to database',
        });
    
});