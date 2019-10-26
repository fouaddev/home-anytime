import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {}

  geocodeLocation(address: string): Observable<any> {

    const KEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + KEY);

    // // This is an alternative way to get lat and lng coords
    // // this command is needed to install types/googlemaps
    // // npm install --save-dev @types/googlemaps

    // console.log('Getting address: ', address);
    // let geocoder = new google.maps.Geocode();
    // return Observable.create(observer => {
    //     geocoder.geocode({
    //         'address': address
    //     }, (results, status) => {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             observer.next(results[0].geometry.location);
    //             observer.complete();
    //         } else {
    //             console.log('Error: ', results, ' & Status: ', status);
    //             observer.error();
    //         }
    //     });
    // });

  }
}
