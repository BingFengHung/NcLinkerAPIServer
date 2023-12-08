import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetLang } from "../interfaces/DsGetLang";



@Route("DsGetLang")
export class DsGetLangController extends BaseController<DsGetLang> {
  constructor() {
    super("DsGetLang");
  }

  @Get("/")
  public async get(): Promise<DsGetLang> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetLang): Promise<boolean> {
    return super.set(data);
  }
}
