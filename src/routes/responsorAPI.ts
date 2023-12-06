import { createController }  from '../controllers';
import { BaseController } from '../controllers/baseController';

export class RouterCreator<T> {
  protected controller: BaseController<T>;

  constructor(apiName: string) { 
    this.controller = createController<T>(apiName);
  }

  public async get(req: any, res: any) {
    const response = await this.controller.get();
    res.send(response);
  }

  public async put(req: any, res: any) { 
    const query = JSON.parse(JSON.stringify(req.query)); 
    const response = await this.controller.set({...query }); 
    res.send(response);
  }
}
