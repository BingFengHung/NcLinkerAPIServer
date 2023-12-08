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
import { DsGetAxisNameController } from '../controllers/DsGetAxisNameController';
import { DsGetAxisNameDspController } from '../controllers/DsGetAxisNameDspController';
import { DsGetLangController } from '../controllers/DsGetLangController';
import { DsGetNAxisController } from '../controllers/DsGetNAxisController';
import { DsGetPLCvController } from '../controllers/DsGetPLCvController';
import { DsGetWMCurrentController } from '../controllers/DsGetWMCurrentController';
import { DsGetWMMaxController } from '../controllers/DsGetWMMaxController';
import { DsIsNoSrvController } from '../controllers/DsIsNoSrvController';
import { DsIsRunningController } from '../controllers/DsIsRunningController';
import { DsIsStartController } from '../controllers/DsIsStartController';
import { DsSetLangController } from '../controllers/DsSetLangController';
import { DsSetWMCurrentController } from '../controllers/DsSetWMCurrentController';
import { DsSetWMMaxController } from '../controllers/DsSetWMMaxController';

const router = express.Router();

router.use('/NCConnect', RouterCreator(new NCConnectController()));
router.use('/GetNCPLC', RouterCreator(new GetNCPLCController())); 
router.use('/DsGetCoordOffsetBatch', RouterCreator(new DsGetCoordOffsetBatchController())); 
router.use('/DsGetCoordOffset', RouterCreator(new DsGetCoordOffsetController())); 
router.use('/DsSetCoordOffset', RouterCreator(new DsSetCoordOffsetController())); 
router.use('/DsGetWorkPieceExt', RouterCreator(new DsGetWorkPieceExtController())); 
router.use('/DsSetWorkPieceExt', RouterCreator(new DsSetWorkPieceExtController())); 
router.use('/DsGetWorkPieceG92', RouterCreator(new DsGetWorkPieceG92Controller())); 

router.use('/DsGetAxisName', RouterCreator(new DsGetAxisNameController())); 

router.use('/DsGetAxisNameDsp', RouterCreator(new DsGetAxisNameDspController())); 
router.use('/DsGetLang', RouterCreator(new DsGetLangController())); 
router.use('/DsGetNAxis', RouterCreator(new DsGetNAxisController())); 
router.use('/DsGetPLCv', RouterCreator(new DsGetPLCvController())); 
router.use('/DsGetWMCurrent', RouterCreator(new DsGetWMCurrentController())); 
router.use('/DsGetWMMax', RouterCreator(new DsGetWMMaxController())); 
router.use('/DsIsNoSrv', RouterCreator(new DsIsNoSrvController())); 
router.use('/DsIsRunning', RouterCreator(new DsIsRunningController())); 
router.use('/DsIsStart', RouterCreator(new DsIsStartController())); 
router.use('/DsSetLang', RouterCreator(new DsSetLangController())); 
router.use('/DsSetWMCurrent', RouterCreator(new DsSetWMCurrentController())); 
router.use('/DsSetWMMax', RouterCreator(new DsSetWMMaxController())); 


export default router; 