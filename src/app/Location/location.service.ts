import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Locationss} from './Locationss';


@Injectable({providedIn: 'root'})
export class LocationService {

  private apiServerUrl = environment.apiBaseUrl + "/location";

  constructor(private http: HttpClient){}

  public getLocation(): Observable<Locationss[]> {
    return this.http.get<Locationss[]>(`${this.apiServerUrl}`);
  }

}
