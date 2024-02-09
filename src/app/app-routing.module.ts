import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './components/main/forecast/forecast.component';

const routes: Routes = [
  { path: 'forecast', component: ForecastComponent},
  { path: '**', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

