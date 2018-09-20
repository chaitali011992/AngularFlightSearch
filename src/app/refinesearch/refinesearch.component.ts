import { Component, OnInit } from '@angular/core';
import{FlightService} from '../flight.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
@Component({
  selector: 'app-refinesearch',
  templateUrl: './refinesearch.component.html',
  styleUrls: ['./refinesearch.component.css']
})
export class RefinesearchComponent implements OnInit {
  selectedValue: Number;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  updateSelectedValue(valueObject): void {
    this.selectedValue = valueObject.value;
    this.flightService.refineFlight(this.selectedValue);
  }
}
