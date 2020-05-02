//routes/auth.js
const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* POST regster. */
router.post('/get-user', async (req, res, next) => {
    User.findOne({ phone: req.body.phone }, (err, user) => {
        if (err) return res.send(err);
        if (!!user) return res.json({ id: user._id });
        else {
            const newUser = new User({ phone: req.body.phone });
            newUser.save((err,user)=>{
                
            })
        }
    });
});

router.post('/get-otp', async (req, res, next) => {

    let user = User.findById(req.body.id);

    if (user) {
        res.json({
            token: Speakeasy.totp({
                secret: req.body.secret,
                time: 120,
                encoding: "base32",
            }),
            remaining: (120 - Math.floor((new Date()).getTime() / 1000.0 % 120))
        });
    } else {
        res.status(400).json({ error: 'user id not valid' });
    }
});

router.post('/get-token', async (req, res, next) => {

    let user = User.findById(req.body.id);

    const otpValid = Speakeasy.totp.verify({
        secret: req.body.secret,
        token: req.body.otp,
        time: 120,
        encoding: "base32",
        window: 0
    });

    if (otpValid) {
        res.json({ token: jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET) });
    } else {
        res.json({ error: 'OTP token not valid' })
    }
});


module.exports = router;