import { Injectable } from '@angular/core';
import { Disc } from '../data/disc';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../data/artist';

@Injectable({
  providedIn: 'root'
})
export class DiscService
 {

  constructor(private http: HttpClient) { }
  url : string = "https://localhost:7082/Artist/All";
  
  getAllDiscs(): Observable<Artist[]>
  {
    
    return this.http.get<Artist[]>(this.url);
  }

  
}
