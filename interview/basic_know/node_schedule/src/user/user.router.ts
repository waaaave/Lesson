import express from "express";
import { validateUserData } from './user.middleware'

const router = express.Router();

router.post('/users', validateUserData)

export default router