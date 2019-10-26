import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import { AgmCoreModule } from '@agm/core';

// import { BrowserModule } from '@angular/platform-browser';

// import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    })
  ],
  exports: [
    MapComponent
  ],
  providers: [
    // MapService
  ]
})
export class MapModule { }
