import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Episode} from './Episode';


@Injectable({providedIn: 'root'})
export class EpisodeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEpisode(): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.apiServerUrl}`);
  }

}
