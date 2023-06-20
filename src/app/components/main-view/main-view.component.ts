import { Component, OnInit } from '@angular/core';
import { DiscService } from 'src/app/services/disc.service';
import { Artist } from 'src/app/data/artist';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit{
/**
 *
 */
constructor(private discService : DiscService )
 {  
}

artists: Artist[] = [];

  ngOnInit(): void
  {
    this.discService.getAllDiscs().subscribe(
      (artists) =>
      {
        // Handle the returned artists
        this.artists = artists;
        console.log(artists);
      },
      (error) => {
        // Handle any errors
        console.error(error);
      }
    );

  }
}
