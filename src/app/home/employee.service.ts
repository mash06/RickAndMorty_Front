import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Hero} from './hero';
import {Herorep} from '../favorite/herorep';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiServerUrl}`);
  }

  // public getname(): Observable<String[]> {
  //   return this.http.get<String[]>(`${this.apiServerUrl}/name`);
  // }

  public getHerobyid(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiServerUrl}/${id}`);
  }
  public addHero(herorep: Herorep): Observable<Herorep> {
    console.log("Sending request to url: " + URL + "/add");
    console.log(herorep);
    return this.http.post<Herorep>(`${this.apiServerUrl}/add`, herorep);
  }
}
