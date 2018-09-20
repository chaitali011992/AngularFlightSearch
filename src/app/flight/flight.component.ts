import { Component, OnInit } from '@angular/core';
import{Flight} from '../Flight'
import {FlightService} from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  
  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  PrintFlights(flightDetails: Flight):void{
    alert('Tickets for '+this.flightService.passengerNum+' people are booked on Flight: '+flightDetails.id);
  }

}
