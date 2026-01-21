const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
};

// handle error
const handleErrors = (err) => {

    let errors = { email: '', password: '', name: '' };

    if (err.message === 'incorrect email') {
        errors.email = 'Email not registered';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'Incorrect password';
    }

    // duplicate error code
    if (err.code === 11000) {
        errors.email = 'That email is already registered';
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

module.exports.signup_post = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.create({ name, email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
        res.status(201).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        res.status(200).json({
            user: user._id,
            token
        });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};