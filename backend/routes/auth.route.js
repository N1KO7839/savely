import express from 'express';
import {signup, login, logout, verifyEmail} from '../controllers/auth.controller.js';
import { verify } from 'crypto';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail)

export const authRouter = router;