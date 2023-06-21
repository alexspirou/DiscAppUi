import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disc-view',
  templateUrl: './disc-view.component.html',
  styleUrls: ['./disc-view.component.css']
})
export class DiscViewComponent implements OnInit{


  constructor(private route : ActivatedRoute)
   {
    
  }
  msg : String = ""; 
  ngOnInit(): void
  {
    debugger;

    const routeParams = this.route.snapshot.paramMap;
    this.msg  = String(routeParams.get('msg'));

  }  
}


