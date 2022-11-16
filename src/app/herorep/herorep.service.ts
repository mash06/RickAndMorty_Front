import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Herorep} from '../herorep/herorep';

@Injectable({providedIn: 'root'})
export class HerorepService {

  private apiServerUrl = " ";

  constructor(private http: HttpClient) {}


  public addHero(herorep: Herorep): Observable<Herorep> {
    return this.http.post<Herorep>('$(this.apiServerUrl)/rick-and-morty/add', herorep);
  }

}
