import express from 'express';
import { RouterCreator } from './RouterCreator';
import { DsGetCoordOffsetController } from '../controllers/DsGetCoordOffsetController';
import { NCConnectController } from '../controllers/NCConnectController';
import { DsGetCoordOffsetBatchController } from '../controllers/DsGetCoordOffsetBatchController';
import { GetNCPLCController } from '../controllers/GetNCPLCController';

const router = express.Router();

router.use('/NCConnect', RouterCreator(new NCConnectController()));
router.use('/DsGetCoordOffset', RouterCreator(new DsGetCoordOffsetController())); 
router.use('/DsGetCoordBatchOffset', RouterCreator(new DsGetCoordOffsetBatchController())); 
router.use('/GetNCPLC', RouterCreator(new GetNCPLCController())); 

export default router; 