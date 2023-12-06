import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetWorkPieceExt } from "../interfaces/DsGetWorkPieceExt";

@Route("DsGetWorkPieceExt")
export class DsGetWorkPieceExtController extends BaseController<DsGetWorkPieceExt> {
  constructor() {
    super("DsGetWorkPieceExt");
  }

  @Get("/")
  public async get(): Promise<DsGetWorkPieceExt> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetWorkPieceExt): Promise<boolean> {
    return super.set(data);
  }
}
