import passport from "passport";

import googleOAuth from "passport-google-oauth20";

const GoogleStrategy = googleOAuth.Strategy;

const { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET } = process.env;

console.log("The keys -> ", process.env.GOOGLE_OAUTH_CLIENT_ID);

const url = `/api/v1/auth/login/google/callback`;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: url,
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("The google login -> ", profile);
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
    },
  ),
);
