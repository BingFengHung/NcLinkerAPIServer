import {Body, Get, Put} from "tsoa";
import Responser from "./apiResponse";

export abstract class BaseController<T> {
  protected response: Responser;
  protected routeName: string;

  constructor(routeName: string) {
    this.routeName = routeName;
    this.response = new Responser(routeName);
  }

  public async get(): Promise<T> {
    return this.response.load();
  }

  public async set(@Body() data: T): Promise<boolean> {
    return this.response.save(data);
  }
}