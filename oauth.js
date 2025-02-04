var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

async function getUserData(access_token){
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`);
    const data = await response.json();
    console.log('data', data);
}

router.get('/', async function(req, res, next) {
    const code = req.query.code;
    try{
        const redirectUrl = 'http://127.0.0.1:3000/profile';
        const OAuth2Client = new OAuth2Client(
            process.env.REACT_APP_CLIENT_ID,
            process.env.REACT_APP_SECRET_KEY,
            redirectUrl
        );
    const res = await OAuth2Client.getToken(code);
    await OAuth2Client.setCredentials(res.tokens);
    console.log('Tokenssss');
    const user = oAuth2Client.credentials;
    console.log('credentials', user);
    await getUserData(user.access_token);
    }
    catch(err){
        console.log('Error with signing in')
    }
});

module.exports = router;