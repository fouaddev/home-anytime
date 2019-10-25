import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  location: string;

  lat: number;
  lng: number;
  
  zoom: number = 15;

  constructor(private mapService:MapService) {}

  ngOnInit() {

    let thisLocation = this.location;
    let strCoords = localStorage.getItem('rentalCoords');
    
    if(strCoords == undefined) {

      this.mapService.geocodeLocation(thisLocation)
      .subscribe(
        (jsonLatLng: any) => {
          
          let strLatLng = jsonLatLng.results[0].geometry.location;
          this.lat = strLatLng.lat;
          this.lng = strLatLng.lng;

          let rentalGeoInfo = [];
          rentalGeoInfo.push({
            location: thisLocation, 
            coords: {
              lat: this.lat, lng: this.lng
            }
          });

          localStorage.setItem('rentalCoords', JSON.stringify(rentalGeoInfo));
        },
        (error) => {
          console.log('\nCoordinates could not be found...\n' + error);
        },
        () => {
          console.log('No errors');
        }
      );

    } else {
      let jsonCoords = JSON.parse(strCoords);
      
      for(let i = 0; i < jsonCoords.length; i++) {

        if(jsonCoords[i].location == thisLocation) {
          
          this.lat = jsonCoords[i].coords.lat;
          this.lng = jsonCoords[i].coords.lng;
        
          return;
        }
      }

      this.mapService.geocodeLocation(thisLocation)
      .subscribe(
        (jsonLatLng: any) => {
          
          let latLngData = jsonLatLng.results[0].geometry.location;
          this.lat = latLngData.lat;
          this.lng = latLngData.lng;

          jsonCoords.push({
            location: thisLocation, 
            coords: {
              lat: this.lat, lng: this.lng
            }
          });

          localStorage.setItem('rentalCoords', JSON.stringify(jsonCoords));
        }
      );
    }
  }
}
