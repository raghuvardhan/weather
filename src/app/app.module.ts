import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import { CurrentWeatherComponent } from './components/main/components/current-weather/current-weather.component';
import { DailyForecastComponent } from './components/main/components/daily-forecast/daily-forecast.component';
import { HourlyForecastComponent } from './components/main/components/hourly-forecast/hourly-forecast.component';
import { WeatherMapComponent } from './components/main/components/weather-map/weather-map.component';
import { AirQualityComponent } from './components/main/components/air-quality/air-quality.component';
import { UvIndexComponent } from './components/main/components/uv-index/uv-index.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    CurrentWeatherComponent,
    DailyForecastComponent,
    HourlyForecastComponent,
    WeatherMapComponent,
    AirQualityComponent,
    UvIndexComponent,
    FooterComponent,
    SidePanelComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
