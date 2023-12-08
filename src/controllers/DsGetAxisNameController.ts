import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsGetAxisName } from "../interfaces/DsGetAxisName";


@Route("DsGetAxisName")
export class DsGetAxisNameController extends BaseController<DsGetAxisName> {
  constructor() {
    super("DsGetAxisName");
  }

  @Get("/")
  public async get(): Promise<DsGetAxisName> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsGetAxisName): Promise<boolean> {
    return super.set(data);
  }
}
