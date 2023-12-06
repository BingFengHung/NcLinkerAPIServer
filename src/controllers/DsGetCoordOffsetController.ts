import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetCoordOffset } from "../interfaces/DsGetCoordOffset";


@Route("DsGetCoordOffset")
export class DsGetCoordOffsetController extends BaseController<DsGetCoordOffset> {
  constructor() {
    super("DsGetCoordOffset");
  }

  @Get("/")
  public async get(): Promise<DsGetCoordOffset> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetCoordOffset): Promise<boolean> {
    return super.set(data);
  }
}
