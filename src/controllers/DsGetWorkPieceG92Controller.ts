import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetWorkPieceG92 } from "../interfaces/DsGetWorkPieceG92";



@Route("DsGetWorkPieceG92")
export class DsGetWorkPieceG92Controller extends BaseController<DsGetWorkPieceG92> {
  constructor() {
    super("DsGetWorkPieceG92");
  }

  @Get("/")
  public async get(): Promise<DsGetWorkPieceG92> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetWorkPieceG92): Promise<boolean> {
    return super.set(data);
  }
}
