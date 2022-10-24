import passport from "passport";
import googleOAuth from "passport-google-oauth20";

// import userModel from "../../models/userModel";

const GoogleStrategy = googleOAuth.Strategy;

export const googlePassportInit = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: "/api/v1/auth/login/google/callback",
      },
      async function (accessToken, refreshToken, profile, cb) {
        try {
          const data = profile?._json;

          console.log("The data -> ", profile);

          // Upsert the user into Database
          const gUser = await userModel.findOneAndUpdate(
            { googleId: profile?.id },
            {
              email: data?.email,
              name: data?.name,
              googleId: profile?.id,
              isVerifiedAccount: data?.verified_email,
              displayPicture: data?.picture,
              signInMethod: data?.provider,
            },
            { upsert: true },
          );

          console.log("The google user -> ", gUser);

          // Callback to continue with the login process.
          cb(null, gUser);
        } catch (error) {
          console.error("Error in Google Auth ", error);

          // Callback to continue with the login process.
          cb(error, null);
        }
      },
    ),
  );
};

export const googleAuthenticateUser = () => {
  return passport.authenticate("google", {
    successRedirect: "/api/v1/auth/login/google/success",
    failureRedirect: "/api/v1/auth/login/google/failed",
  });
};
