import { Body, Get, Put, Route } from "tsoa";
import { BaseController } from "./baseController";
import { GetNCPLC } from "../interfaces/GetNCPLC";



@Route("GetNCPLC")
export class GetNCPLCController extends BaseController<GetNCPLC> {
  constructor() {
    super("GetNCPLC");
  }

  @Get("/")
  public async get(): Promise<GetNCPLC> {
    return super.get();
  }

  @Put("/")
  public async set(@Body() data: GetNCPLC): Promise<boolean> {
    return super.set(data);
  }
}
