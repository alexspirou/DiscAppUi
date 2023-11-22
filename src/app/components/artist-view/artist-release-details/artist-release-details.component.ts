import { Component, Input, OnInit } from '@angular/core';
import { ReleaseDetailsDto } from 'src/app/data/Release/ReleaseDetailsDto';

@Component({
  selector: 'app-artist-release-details',
  templateUrl: './artist-release-details.component.html',
  styleUrls: ['./artist-release-details.component.css']
})
export class ArtistReleaseDetailsComponent  implements OnInit  {
  ngOnInit(): void {
    
  }


  @Input() releaseDetails: ReleaseDetailsDto = new ReleaseDetailsDto();
}
