import { Router } from "express";

import { signUp } from "./../controller/authController.js";

// Init router
const router = Router();

router.route("/signup").post(signUp);

export default router;
