import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseDetailsDto } from 'src/app/data/Release/ReleaseDetailsDto';
import { ReleaseService } from "../../services/release.service"
@Component({
  selector: 'app-disc-view',
  templateUrl: './disc-view.component.html',
  styleUrls: ['./disc-view.component.css']
})
export class DiscViewComponent implements OnInit{


  constructor(private route : ActivatedRoute, private releaseService : ReleaseService)
   {
    
  }
  msg : String = ""; 
  ngOnInit(): void
  {
    debugger;
    this.getReleases();
    
    const routeParams = this.route.snapshot.paramMap;
    this.msg  = String(routeParams.get('msg'));

  }  
  releases: ReleaseDetailsDto[] = [];


  getReleases(): void
  {
    debugger;
    this.releaseService.getReleaseRange().subscribe(data => {
      this.releases = data;
    });
  }


}


