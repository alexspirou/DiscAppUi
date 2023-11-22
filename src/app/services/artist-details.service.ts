import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistDetails as ArtistDetails } from '../data/artistDetails';

@Injectable({
  providedIn: 'root'
})
export class ArtistDetailsService {

  constructor(private http: HttpClient) { 

  }
  searchArtistUrl : string = "https://localhost:7082/ArtistApi/GetArtistDetails";
  getArtistDetailsUrl : string = "https://localhost:7248/ArtistApi/GetArtistDetails";

  searchArtistName(artistName : string): Observable<ArtistDetails[]>{
    return this.http.get<ArtistDetails[]>(`${this.searchArtistUrl}/${artistName}`);
  }

  getArtistDetails(artistName : string): Observable<ArtistDetails>
  {
    return this.http.get<ArtistDetails>(`${this.getArtistDetailsUrl}/${artistName}`);
  }




}
