import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disk-details',
  templateUrl: './disk-details.component.html',
  styleUrls: ['./disk-details.component.css']
})
export class DiskDetailsComponent implements OnInit
 {
  id : Number = 0; 

  ngOnInit(): void {
  }

  onClick(){

    this.id = 3601239;
  }
}
