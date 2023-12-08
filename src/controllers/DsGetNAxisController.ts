import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetNAxis } from "../interfaces/DsGetNAxis";



@Route("DsGetNAxis")
export class DsGetNAxisController extends BaseController<DsGetNAxis> {
  constructor() {
    super("DsGetNAxis");
  }

  @Get("/")
  public async get(): Promise<DsGetNAxis> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetNAxis): Promise<boolean> {
    return super.set(data);
  }
}
