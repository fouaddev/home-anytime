import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getLocation(url: string): Observable<any> {
    // let requestUrl: string = `http://kalathur.com/getJsonData.php?url=${url}`;
  	return this.http.jsonp(url, 'callback'); 
  }
}
