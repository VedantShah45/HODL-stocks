import express from 'express'
const router=express.Router();
import { getTrades } from "../controllers/tradeController.js";

router.route('/').get(getTrades)

export default router;