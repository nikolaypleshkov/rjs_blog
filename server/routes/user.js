const router = require('express').Router();

const User = require('../models/user');

router.post('/login', (req, res) => {
    const { email, password } = req.body;
});
