import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetails } from 'src/app/data/artistDetails';
import { ArtistDetailsService } from 'src/app/services/artist-details.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.css']
})
export class ArtistViewComponent  implements OnInit{

  constructor(private route : ActivatedRoute, private artistDetailsService : ArtistDetailsService)
  {
   
 }
  ngOnInit(): void 
  {
    const routeParams = this.route.snapshot.paramMap;
    this.getArtistDetails(String(routeParams.get('name')));
  }

  artistDetails: ArtistDetails = new ArtistDetails();
  
  getArtistDetails(name :string): void
  {
    this.artistDetailsService.getArtistDetails(name).subscribe(data => {
      this.artistDetails = data;
    });

    debugger;
    
  }

}
