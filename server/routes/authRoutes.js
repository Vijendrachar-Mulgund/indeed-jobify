import { Router } from "express";

import { signUp, login, autoAuthenticate } from "./../controllers/authController.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

router.route("/login").post(login);

router.route("/auto-authenticate").get(autoAuthenticate);

export default router;
