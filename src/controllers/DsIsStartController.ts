import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsIsStart } from "../interfaces/DsIsStart";



@Route("DsIsStart")
export class DsIsStartController extends BaseController<DsIsStart> {
  constructor() {
    super("DsIsStart");
  }

  @Get("/")
  public async get(): Promise<DsIsStart> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsIsStart): Promise<boolean> {
    return super.set(data);
  }
}
