import express from 'express';
const router = express.Router();
import authRouter from './authRouter.ts';

router.use('/auth', authRouter);

export default router;
