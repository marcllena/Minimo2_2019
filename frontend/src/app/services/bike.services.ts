import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Environment } from "./environment";

@Injectable({
  providedIn: 'root'
})
export class BikeServices {

  environment: Environment;

  constructor(private http: HttpClient) {
    this.environment = new Environment();
  }

  obtainUnnasignedBikes() {
    return this.http.get(this.environment.url + "getUnnasignBikes", {observe: 'response'})
  }
  obtainBikes() {
    return this.http.get(this.environment.url + "getBikes", {observe: 'response'})
  }
  assignBike(stationId, bikeId) {
    return this.http.get(this.environment.url + "assignBike/"+stationId+"/"+bikeId, {observe: 'response'})
  }
  desAssignBike(stationId, bikeId) {
    return this.http.get(this.environment.url + "unassignBike/"+stationId+"/"+bikeId, {observe: 'response'})
  }
  addBike(params) {
    return this.http.post(this.environment.url + "addBike/",params, {observe: 'response'})
  }
}
