import { Route, Get, Body, Put } from "tsoa";
import { BaseController } from "./baseController";
import { NCConnect } from "../interfaces/NCConnect";

@Route("NCConnect")
export class NCConnectController extends BaseController<NCConnect> {
  constructor() {
    super("NCConnect");
  }

  @Get("/")
  public async get(): Promise<NCConnect> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: NCConnect): Promise<boolean> {
    return super.set(data);
  }
}
