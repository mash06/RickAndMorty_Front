import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Location} from './Locations';


@Injectable({providedIn: 'root'})
export class LocationService {

  private apiServerUrl = environment.apiBaseUrl + "/location";

  constructor(private http: HttpClient){}

  public getLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiServerUrl}`);
  }

}
