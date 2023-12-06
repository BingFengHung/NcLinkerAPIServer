import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsSetCoordOffset } from "../interfaces/DsSetCoordOffset";



@Route("DsSetCoordOffset")
export class DsSetCoordOffsetController extends BaseController<DsSetCoordOffset> {
  constructor() {
    super("DsSetCoordOffset");
  }

  @Get("/")
  public async get(): Promise<DsSetCoordOffset> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsSetCoordOffset): Promise<boolean> {
    return super.set(data);
  }
}
