import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArtistDetails } from '../data/artistDetails';
import { ReleaseDetailsDto } from '../data/Release/ReleaseDetailsDto';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService
 {

  constructor(private http: HttpClient) { }
  url : string = "https://localhost:7248/ReleaseApi/GetReleaseDetails/0/3";
  

  getReleaseRange(): Observable<ReleaseDetailsDto[]> {
    return this.http.get<ReleaseDetailsDto[]>(this.url);
  }

  
}
