import express from 'express';
import { BaseController } from '../controllers/baseController';

class Creator<T> {
  protected controller: BaseController<T>;

  constructor(controller: BaseController<T>) {
    this.controller = controller
  }

  public get = async (req: any, res: any) => {
    const response = await this.controller.get();
    res.send(response);
  }

  public put  = async (req: any, res: any) => { 
    const query = JSON.parse(JSON.stringify(req.body)); 
    const response = await this.controller.set({...query }); 
    res.send(response);
  }
}

export function RouterCreator<T>(controller: BaseController<T>) {
  const router = express.Router(); 
  const routerCreator = new Creator(controller); 
  router.get('/', routerCreator.get); 
  router.put('/', routerCreator.put);
  return router
  
  
}