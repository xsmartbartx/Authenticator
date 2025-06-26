import express from 'express';
import { login, logout, register, sendVerifyOtp, verifyEmail } from '../controllers/authController';
import userAuth from '../middleware/userAuth';
import { verify } from 'jsonwebtoken';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('verify-account', userAuth, verifyAccount);
authRouter.post('/is-auth', userAuth, verifyEmail);

export default authRouter;