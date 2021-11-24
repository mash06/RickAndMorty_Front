import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Hero} from './hero';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiServerUrl}`);
  }

}
