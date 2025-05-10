import express from 'express';
import { createCampaign, listCampaigns } from '../controllers/campaign.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/', protect, createCampaign);
router.get('/', protect, listCampaigns);
export default router;
