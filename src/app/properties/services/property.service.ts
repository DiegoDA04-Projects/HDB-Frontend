import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../model/property";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class PropertyService extends BaseService<Property> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/properties';
  }
}
