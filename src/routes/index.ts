import express from 'express';
import { DsGetCoordOffsetController } from '../controllers/DsGetCoordOffsetController';
import { NCConnectController } from '../controllers/NCConnectController';
import { RouterCreator } from './RouterCreator';

const router = express.Router();

router.use('/NCConnect', RouterCreator(new NCConnectController()));
router.use('/DsGetCoordOffset', RouterCreator(new DsGetCoordOffsetController())); 
export default router; 