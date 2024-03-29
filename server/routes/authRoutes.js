import { Router } from "express";

import {
  signUp,
  login,
  autoAuthenticate,
  logout,
  googleOAuthHandler,
  authenticate,
} from "./../controllers/authController.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

router.route("/login/google").get(googleOAuthHandler);

router.route("/login").post(login);

router.route("/authenticate").post(authenticate);

router.route("/auto-authenticate").get(autoAuthenticate);

router.route("/logout").post(logout);

export default router;
