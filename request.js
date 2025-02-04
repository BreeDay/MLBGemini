var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

router.post('/', async function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Referrer-Policy', 'no-referrer-when-downgrade');

    const redirectUrl = "http://127.0.0.1/3000/profile";

    const OAuth2Client = new OAuth2Client(
        process.env.REACT_APP_CLIENT_ID,
        process.env.REACT_APP_SECRET_KEY,
        redirectUrl
    );

    const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile openid',
        prompt: 'consent'
    });
    res.json({url:authorizeUrl})
});

module.exports = router;