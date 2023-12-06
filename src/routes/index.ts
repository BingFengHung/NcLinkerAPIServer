import express from 'express';
import { createAdder } from './routerAdder';
import { NCConnect } from '../interfaces/NCConnect';
import { DsGetCoordOffset } from '../interfaces/DsGetCoordOffset';

const router = express.Router();

router.use('/NCConnect', createAdder<NCConnect>('NCConnect') );
router.use('/DsGetCoordOffset', createAdder<DsGetCoordOffset>('DsGetCoordOffset')); 

export default router; 