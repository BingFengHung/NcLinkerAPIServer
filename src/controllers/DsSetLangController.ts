import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsSetLang } from "../interfaces/DsSetLang";



@Route("DsSetLang")
export class DsSetLangController extends BaseController<DsSetLang> {
  constructor() {
    super("DsSetLang");
  }

  @Get("/")
  public async get(): Promise<DsSetLang> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsSetLang): Promise<boolean> {
    return super.set(data);
  }
}
