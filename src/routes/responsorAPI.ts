import { createController }  from '../controllers';
import { BaseController } from '../controllers/baseController';

export class RouterCreator<T> {
  protected controller: BaseController<T>;

  constructor(apiName: string) {
    this.controller = createController<T>(apiName);
    console.log(this.controller)
  }

  public get = async (req: any, res: any) => {
    const response = await this.controller.get();
    res.send(response);
  }

  public put  = async (req: any, res: any) => { 
    const query = JSON.parse(JSON.stringify(req.query)); 
    const response = await this.controller.set({...query }); 
    res.send(response);
  }
}
