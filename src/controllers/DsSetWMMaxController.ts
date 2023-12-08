import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsSetWMMax } from "../interfaces/DsSetWMMax";



@Route("DsSetWMMax")
export class DsSetWMMaxController extends BaseController<DsSetWMMax> {
  constructor() {
    super("DsSetWMMax");
  }

  @Get("/")
  public async get(): Promise<DsSetWMMax> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsSetWMMax): Promise<boolean> {
    return super.set(data);
  }
}
