
const express = require('express');
const app = express();
const Datastore = require('@seald-io/nedb');
const Joi = require('joi');
const bcrypt = require('bcrypt');

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

    const saltRounds = 10;
    const plainTextPassword = req.body.password;

    if (error !== undefined) {
        return res.json({status: "error", error})
    } else {
        bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
            database.insert({
                email: req.body.email,
                password: hash
            })
        });
        res.json({
            result: 'User added to database',
        });
    }

});


app.post('/find-user', (req, res) => {
    database.find({email: req.body.email}, (errNoEmail, docs) => {
        if (errNoEmail) {
            res.send(errNoEmail);
        } else {
            bcrypt.compare(req.body.password, docs[0]?.password, (errWrongPassword, result) => {
                if (result === true) {
                    res.send(docs);
                } else {
                    res.send([]); 
                }
            });
        }
    });
});