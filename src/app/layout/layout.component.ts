import { Component, OnInit } from '@angular/core';
import{FlightService} from '../flight.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }

}
