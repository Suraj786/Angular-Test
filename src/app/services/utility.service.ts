import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService {

  constructor() { }

  public static convertObjectToJson(res: any): any {
    return JSON.stringify(res.body);
  }

  public static convertJsonToString(data: any) {
    return JSON.parse(data);
  }

  public static newObject(data: any) {
    return JSON.parse(JSON.stringify(data));
  }
}
