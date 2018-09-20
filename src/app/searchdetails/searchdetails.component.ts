import { Component, OnInit } from '@angular/core';
import {FlightService} from '../flight.service';
@Component({
  selector: 'app-searchdetails',
  templateUrl:'./searchdetails.component.html',
  styleUrls: ['./searchdetails.component.css']
})
export class SearchdetailsComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  
  getFlightPathTo(): String {
    if (this.flightService.currentFromCity === "" || this.flightService.currentFromCity == undefined)
      return "";
    else {
      if(this.flightService.FormName !== 'Return') {
        return this.flightService.currentFromCity.toUpperCase()+" > "+this.flightService.currentToCity.toUpperCase();
      } else {
        return this.flightService.currentFromCity.toUpperCase()+" > "+this.flightService.currentToCity.toUpperCase()+" > "+this.flightService.currentFromCity.toUpperCase();
      }
    }
  }
  getVar(Myvar: String): String {
    if (this.flightService.departureDate === "" || this.flightService.departureDate == undefined)
      return "";
    else {
     return Myvar;
    }
  }
}