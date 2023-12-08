import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetAxisNameDsp } from "../interfaces/DsGetAxisNameDsp";



@Route("DsGetAxisNameDsp")
export class DsGetAxisNameDspController extends BaseController<DsGetAxisNameDsp> {
  constructor() {
    super("DsGetAxisNameDsp");
  }

  @Get("/")
  public async get(): Promise<DsGetAxisNameDsp> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetAxisNameDsp): Promise<boolean> {
    return super.set(data);
  }
}
