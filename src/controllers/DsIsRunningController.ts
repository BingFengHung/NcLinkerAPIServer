import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { DsIsRunning } from "../interfaces/DsIsRunning";



@Route("DsIsRunning")
export class DsIsRunningController extends BaseController<DsIsRunning> {
  constructor() {
    super("DsIsRunning");
  }

  @Get("/")
  public async get(): Promise<DsIsRunning> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: DsIsRunning): Promise<boolean> {
    return super.set(data);
  }
}
