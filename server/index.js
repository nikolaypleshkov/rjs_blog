const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');

const PORT = process.env.PORT | 4000;
const app = express();
//Connecting to the DB
const _db_conn = require('./config/keys.js').MongoURI;
mongoose.connect(_db_conn, {useNewUrlParser: true}).then(console.log('status connection: 200')).catch(err => console.log(err));


//Bodyparser
app.use(express.urlencoded( {extended: false }));

//Express Session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//Global var
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

    next();
})

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/user'));

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));