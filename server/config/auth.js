module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.ensureAuthenticated()){
            return next();
        }
        req.flash('error_msg', 'Please login first');
        res.redirect('users/login');
    }
}