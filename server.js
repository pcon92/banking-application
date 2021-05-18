const express = require('express');
const app = express();
const router = express.Router();
const path = require("path");

app.use(express.static('public'));

const PORT = process.env.port || 3000;
app.listen(PORT, () => {console.log(`Listening on Port ${PORT}`)})