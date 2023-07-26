import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);


export default router;
