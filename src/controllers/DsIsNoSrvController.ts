import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsIsNoSrv } from "../interfaces/DsIsNoSrv";



@Route("DsIsNoSrv")
export class DsIsNoSrvController extends BaseController<DsIsNoSrv> {
  constructor() {
    super("DsIsNoSrv");
  }

  @Get("/")
  public async get(): Promise<DsIsNoSrv> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsIsNoSrv): Promise<boolean> {
    return super.set(data);
  }
}
