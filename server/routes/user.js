const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

//User Model
const User = require('../models/User');
//Login Page
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next ) => {
    passport.authenticate('local',{
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

//Register Page
router.get('/register', (req, res) => {
    res.send('register');
});

//Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, confPass } = req.body;
    let errors = [];

    //Checking required fields
    if(!name || !email || !password || !confPass){
        errors.push({msg: 'Please fill in all fields'});
    }
 
    //Password matching check
    if(password !== confPass){
        errors.push({msg: 'Password do not match'});
    }

    //Check pass length
    if(password.length < 6){
        errors.push({msg: 'Password must be at least 6 characters'});
    }

    if(errors.length > 0){
        //Register is not successfull
        res.render('register', {
            errors,
            name,
            email,
            password,
            confPass
        });
    }
    else{
        //Everything is OK
        User.findOne({ email: req.body.email}).then( user => {
            if(user){
                //User exist
                errors.push({ msg: 'Email is already in use'});
                res.render('register', {
                    errors,
                    name,
                    email,
                    password,
                    confPass
                });     
            }
            else{
                const regUser = new User({
                    name,
                    email,
                    password
                });

                //Hash Password
                bcrypt.genSalt(10, (err, salt) =>
                 bcrypt.hash(regUser.password, salt, (err, hash) => {
                     if(err) throw err;

                     regUser.password = hash;
                     regUser.save()
                        .then( user => {
                            req.flash('success_msg', 'Registration successful')
                            res.redirect('/users/login');
                        })
                        .catch(err => console.log(err));
                }));
            }
        });


    }

});



router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Logged out successfuly');
    res.redirect('/users/login');
})

module.exports = router;