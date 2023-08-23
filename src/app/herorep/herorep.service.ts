import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Herorep} from '../favorite/herorep';
import {Hero} from '../home/hero';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class HerorepService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

 public deleteHerorep(heroid: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/favorite/delete/${heroid}`);
 }

 public addHerorep(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${this.apiServerUrl}/add`, hero);
 }

  public getHeroes(): Observable<Herorep[]> {
    return this.http.get<Herorep[]>(`${this.apiServerUrl}/db-heroes`);
  }


}
