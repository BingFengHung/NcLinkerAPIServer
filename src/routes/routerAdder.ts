import express from 'express';
import { RouterCreator } from './responsorAPI';

export function createAdder<T>(apiName: string) {
  const router = express.Router(); 
  const routerCreator = new RouterCreator<T>(apiName); 
  router.get('/', routerCreator.get); 
  router.put('/', routerCreator.put);
  return router
} 