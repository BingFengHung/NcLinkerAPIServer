import express from 'express';
import { DsGetCoordOffset } from "../interfaces/DsGetCoordOffset";
import { RouterCreator } from './responsorAPI';

const router = express.Router();
const routerCreator = new RouterCreator<DsGetCoordOffset>('DsGetCoordOffset');

router.get('/', routerCreator.get); 
router.put('/', routerCreator.put);

export default router; 

