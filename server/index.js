const express = require('express');
const PORT = process.env.PORT | 4000;

const mongoose = require('mongoose');

const _db_conn = require('./config/keys.js').MongoURI;

mongoose.connect(_db_conn, {userNewUrlParser: true}).then(console.log('status connection: 200')).catch(err => console.log(err));


const app = express();

app.get('/', (req,res) => {
    res.send('yes');
});

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));