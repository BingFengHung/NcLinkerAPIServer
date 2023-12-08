import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetWMCurrent } from "../interfaces/DsGetWMCurrent";



@Route("DsGetWMCurrent")
export class DsGetWMCurrentController extends BaseController<DsGetWMCurrent> {
  constructor() {
    super("DsGetWMCurrent");
  }

  @Get("/")
  public async get(): Promise<DsGetWMCurrent> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetWMCurrent): Promise<boolean> {
    return super.set(data);
  }
}
