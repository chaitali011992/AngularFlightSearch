import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightComponent } from './flight/flight.component';
import { SearchwindowComponent } from './searchwindow/searchwindow.component';
import { LayoutComponent } from './layout/layout.component';
import { SearchdetailsComponent } from './searchdetails/searchdetails.component';
import { OneWayComponent } from './one-way/one-way.component';
import { ReturnComponent } from './return/return.component';
import { RefinesearchComponent } from './refinesearch/refinesearch.component';
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent, 
    SearchwindowComponent,
    LayoutComponent,
    SearchdetailsComponent,
    OneWayComponent,
    ReturnComponent,
    RefinesearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
