import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetPLCv } from "../interfaces/DsGetPLCv";



@Route("DsGetPLCv")
export class DsGetPLCvController extends BaseController<DsGetPLCv> {
  constructor() {
    super("DsGetPLCv");
  }

  @Get("/")
  public async get(): Promise<DsGetPLCv> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetPLCv): Promise<boolean> {
    return super.set(data);
  }
}
