const express = require('express');
const app = express();

console.log("server file");

app.get('/', (req, res) => {
    res.send('testing from server')
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})