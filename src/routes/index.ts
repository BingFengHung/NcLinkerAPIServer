import express from 'express';
import { RouterCreator } from './RouterCreator';
import { DsGetCoordOffsetController } from '../controllers/DsGetCoordOffsetController';
import { NCConnectController } from '../controllers/NCConnectController';
import { DsGetCoordOffsetBatchController } from '../controllers/DsGetCoordOffsetBatchController';
import { GetNCPLCController } from '../controllers/GetNCPLCController';
import { DsGetWorkPieceExtController } from '../controllers/DsGetWorkPieceExtController';
import { DsGetWorkPieceG92Controller } from '../controllers/DsGetWorkPieceG92Controller';
import { DsSetCoordOffsetController } from '../controllers/DsSetCoordOffsetController';
import { DsSetWorkPieceExtController } from '../controllers/DsSetWorkPieceExtController';

const router = express.Router();

router.use('/NCConnect', RouterCreator(new NCConnectController()));
router.use('/DsGetCoordOffset', RouterCreator(new DsGetCoordOffsetController())); 
router.use('/DsGetCoordOffsetBatch', RouterCreator(new DsGetCoordOffsetBatchController())); 
router.use('/GetNCPLC', RouterCreator(new GetNCPLCController())); 
router.use('/DsGetWorkPieceExt', RouterCreator(new DsGetWorkPieceExtController())); 
router.use('/DsGetWorkPieceG92', RouterCreator(new DsGetWorkPieceG92Controller())); 
router.use('/DsSetCoordOffset', RouterCreator(new DsSetCoordOffsetController())); 
router.use('/DsSetWorkPieceExt', RouterCreator(new DsSetWorkPieceExtController())); 

export default router; 