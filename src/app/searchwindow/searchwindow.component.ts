import { Component, OnInit } from '@angular/core';
import {FlightService} from '../flight.service';
88
@Component({
  selector: 'app-searchwindow',
  templateUrl: './searchwindow.component.html',
  styleUrls: ['./searchwindow.component.css']
})
export class SearchwindowComponent implements OnInit {
  formName: String = 'OneWay';
  fromCity: String;
  toCity: String;
  numPassengers: Number;
  fromDate: String;
  toDate: String;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  
  getFormname(Formname): void {
    this.formName = Formname;
  }

  searchFlights(): void {
    if (this.fromCity === "" || this.fromCity === undefined) {
      alert("Origin City Required!!!");
    } else {
      if (this.toCity === "" || this.toCity === undefined) {
        alert("Destination City Required!!!");
      } else {
        if (this.numPassengers <= 0 || this.numPassengers === undefined) {
          alert("Atleast 1 Passenger Required!!!");
        } else {
    this.flightService.searchFlight(this.fromCity, this.toCity, this.fromDate, this.toDate, this.formName,this.numPassengers);
        }    
  } 
  }
  }
}
