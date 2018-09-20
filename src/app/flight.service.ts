import { Injectable } from '@angular/core';
import { Flight } from './Flight';
import { FLIGHTS } from './flightdata';

@Injectable({
  providedIn: 'root'
}) 
export class FlightService {
  currentFromCity: String;
  currentToCity: String;
  departureDate: String;
  returnDate: String;
  passengerNum: Number;
  RefineFlight: Flight[];
  ReturnFlight: Flight[];
  PopedFlight: Flight[];
  ReturnPopedFlight: Flight[];
  RefineFareMin: Number;
  FormName: String;
  constructor() { }

  searchFlight(fromCity: String, toCity: String, departureDate: String, returnDate: String, formName: String, numPassengers: Number): void {
    this.currentFromCity = fromCity;
    this.currentToCity = toCity;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
    this.passengerNum=numPassengers;
    this.FormName = formName;
    this.RefineFlight = [];
    this.ReturnFlight = [];
    for (let i of FLIGHTS) {
      if (i.connecting_city1.toUpperCase() === this.currentFromCity.toUpperCase() 
        && i.connecting_city2.toUpperCase() === this.currentToCity.toUpperCase()) {
        this.RefineFlight.push(i);
      }
    }
    this.PopedFlight = this.RefineFlight;
    if (this.FormName == 'Return') {
      for (let i of FLIGHTS) {
        if (i.connecting_city2.toUpperCase() === this.currentFromCity.toUpperCase() 
          && i.connecting_city1.toUpperCase() === this.currentToCity.toUpperCase()) {
          this.ReturnFlight.push(i);
        }
      }
      this.ReturnPopedFlight = this.ReturnFlight;
    }

  }

  refineFlight(flightPrice: Number): void {
    console.log("refineFlight Called");
    this.RefineFareMin = flightPrice;
    this.PopedFlight = [];
    this.ReturnPopedFlight = [];
    for (let i of this.RefineFlight) {
      if (i.Fare > this.RefineFareMin) {
        this.PopedFlight.push(i);
      }

    }
    if (this.FormName == 'Return') {
      for (let i of this.ReturnFlight) {
        if (i.Fare > this.RefineFareMin) {
          this.ReturnPopedFlight.push(i);
        }
      }
    }

  }

  getFlightsList(): Flight[] {
    return this.PopedFlight;
  }

  getReturnFlightsList(): Flight[] {
    return this.ReturnPopedFlight;
  }


  getCurrentFromCity(): String {
    return this.currentFromCity;
  }

  getFormName(): String {
    return this.FormName;
  }

  getCurrentToCity(): String {
    return this.currentToCity;
  }
}
