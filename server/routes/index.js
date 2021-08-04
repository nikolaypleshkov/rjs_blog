const router = require('express').Router();
const { esnureAthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.send('home page');
})


router.get('/home', /* esnureAthenticated, */ (req, res) => {
    res.send({name: req.user.name});
});

module.exports = router;