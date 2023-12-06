import express from 'express';
import { NCConnect } from '../interfaces/NCConnect';
import { RouterCreator } from './responsorAPI';

const router = express.Router();
const routerCreator = new RouterCreator<NCConnect>('NCConnect');

router.get('/', routerCreator.get); 
router.put('/', routerCreator.put);

export default router; 
