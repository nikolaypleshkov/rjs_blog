const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
            //Matching user
            User.findOne({ email: email }).then((user) => {
                if(!user){
                    return done(null, false, {
                        message: 'Please provide a valid email address and password'
                    })
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch){
                        return done(null, user);
                    }
                    else{
                        return done(null, false, {
                            message: 'Please provide a valid email address and password'
                        })
                    }
                })
            })
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne(id, (err, user) => {
            done(err, user);
        })
    })
}