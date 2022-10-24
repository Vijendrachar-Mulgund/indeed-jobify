import passport from "passport";

import { Router } from "express";

import { signUp, login, autoAuthenticate, logout, googleOAuthInitHandler } from "./../controllers/authController.js";

import { googleAuthenticateUser } from "./../utils/auth/googlePassport.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

router.route("/login/google-init").post(googleOAuthInitHandler);

router.route("/login/google").get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/login/google/callback").get(googleAuthenticateUser);

// router.route("/login/google/success").get((request, response, next) => {
//   console.log("The success -> ", request);
// });

// router.route("/login/google/failed").get((request, response, next) => {
//   console.log("The failed -> ", request);
// });

router.route("/login").post(login);

router.route("/auto-authenticate").get(autoAuthenticate);

router.route("/logout").post(logout);

export default router;
