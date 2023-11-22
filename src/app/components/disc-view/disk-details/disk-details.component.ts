import { Component, Input, OnInit } from '@angular/core';
import { ReleaseDetailsDto } from 'src/app/data/Release/ReleaseDetailsDto';

@Component({
  selector: 'app-disk-details',
  templateUrl: './disk-details.component.html',
  styleUrls: ['./disk-details.component.css']
})
export class DiskDetailsComponent implements OnInit
 {
  id : Number = 0; 
  @Input() releaseDetails: ReleaseDetailsDto = new ReleaseDetailsDto();
  
  ngOnInit(): void {

    debugger;
    // this.releaseDetails.artistName = "Alex";
    // this.releaseDetails.title = "Gamath EP";
    // this.releaseDetails.country = "Greece";
    // this.releaseDetails.releaseYear = 1993;
    
  }

  onClick(){

    this.id = 3601239;
  }
}
