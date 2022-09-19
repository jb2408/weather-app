import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponentComponent } from './weather-component/weather-component.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { IconTextComponent } from './shared/icon-text/icon-text.component';
import { MoreDataComponent } from './shared/more-data/more-data.component';
import { ForecastBoxComponent } from './shared/forecast-box/forecast-box.component';

@NgModule({
  declarations: [AppComponent, WeatherComponentComponent, IconTextComponent, MoreDataComponent, ForecastBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
