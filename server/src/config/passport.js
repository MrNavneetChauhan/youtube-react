var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const passport = require("passport");
const User = require("../models/user.model");
const {v4:uuidv4} = require("uuid");
require("dotenv").config()
passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:2022/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, callback) {
    let profileObj = profile._json;
    let user = await User.findOne({email_id:profileObj.email}).lean().exec();
    if(!user){
        user = await User.create({
            username:profileObj.name,
            email_id:profileObj.email,
            accessToken:accessToken,
            image_url:profileObj.picture,
            password:uuidv4()
        })
    }
    return callback(null,{user})
  }
));

module.exports = passport