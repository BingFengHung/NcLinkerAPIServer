import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsSetWMCurrent } from "../interfaces/DsSetWMCurrent";



@Route("DsSetWMCurrent")
export class DsSetWMCurrentController extends BaseController<DsSetWMCurrent> {
  constructor() {
    super("DsSetWMCurrent");
  }

  @Get("/")
  public async get(): Promise<DsSetWMCurrent> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsSetWMCurrent): Promise<boolean> {
    return super.set(data);
  }
}
