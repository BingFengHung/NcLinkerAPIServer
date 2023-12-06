import { Route } from "tsoa";
import { BaseController } from "./baseController";

export function createController<T>(routeName: string): BaseController<T> {
  @Route(routeName)
  class Controller extends BaseController<T> {
    constructor() {
      super(routeName);
    }
  }

  return new Controller();
}
