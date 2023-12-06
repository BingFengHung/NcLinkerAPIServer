import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetCoordOffsetBatch } from "../interfaces/DsGetCoordOffsetBatch";

@Route("DsGetCoordOffsetBatch")
export class DsGetCoordOffsetBatchController extends BaseController<DsGetCoordOffsetBatch> {
  constructor() {
    super("DsGetCoordOffsetBatch");
  }

  @Get("/")
  public async get(): Promise<DsGetCoordOffsetBatch> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetCoordOffsetBatch): Promise<boolean> {
    return super.set(data);
  }
}


