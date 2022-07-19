import { Router } from "express";

import { signUp, login, autoAuthenticate } from "./../controller/authController.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

router.route("/login").post(login);

router.route("/auto-authenticate").post(autoAuthenticate);

export default router;
