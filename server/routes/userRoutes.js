import express from 'express';
import { getUser, updateUser } from '../controllers/userController.js';
import userAuth from '../middleware/userAuth.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

export default userRouter;