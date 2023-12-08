import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetWMMax } from "../interfaces/DsGetWMMax";



@Route("DsGetWMMax")
export class DsGetWMMaxController extends BaseController<DsGetWMMax> {
  constructor() {
    super("DsGetWMMax");
  }

  @Get("/")
  public async get(): Promise<DsGetWMMax> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetWMMax): Promise<boolean> {
    return super.set(data);
  }
}
