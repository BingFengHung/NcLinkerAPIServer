import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsSetWorkPieceExt } from "../interfaces/DsSetWorkPieceExt";

@Route("DsSetWorkPieceExt")
export class DsSetWorkPieceExtController extends BaseController<DsSetWorkPieceExt> {
  constructor() {
    super("DsSetWorkPieceExt");
  }

  @Get("/")
  public async get(): Promise<DsSetWorkPieceExt> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsSetWorkPieceExt): Promise<boolean> {
    return super.set(data);
  }
}
