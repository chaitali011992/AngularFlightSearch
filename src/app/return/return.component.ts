import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import{Flight} from '../Flight'
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  PrintFlights(flightDetails: Flight, ReturnFlightDetails: Flight):void{
    alert('Tickets booked for '+this.flightService.passengerNum+' people on Flights: '+flightDetails.id+' and '+ReturnFlightDetails.id);
  }
  getTotalFare(flightDetails: Flight, ReturnFlightDetails: Flight): number{
    return flightDetails.Fare+ReturnFlightDetails.Fare;
  }
}
