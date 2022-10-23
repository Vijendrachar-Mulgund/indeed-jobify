import passport from "passport";

import { Router } from "express";

import { signUp, login, autoAuthenticate, logout, googleOAuthInitHandler } from "./../controllers/authController.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

router.route("/login/google-init").post(googleOAuthInitHandler);

router.route("/login/google").get(passport.authenticate("google"));

// router.route("/login/google/callback").get(
//   passport.authenticate("google", {
//     successRedirect: SERVER_BASE_URL,
//     failureRedirect: "/login/google/failed",
//   }),
// );

// router.route("/login/google/failed").get((request, response, next) => {});

router.route("/login").post(login);

router.route("/auto-authenticate").get(autoAuthenticate);

router.route("/logout").post(logout);

export default router;
