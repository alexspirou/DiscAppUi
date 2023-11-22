import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit{
/**
 *
 */
constructor()
 {  
}


  ngOnInit(): void
  {

  }

  onClickWantList() : void
  {
    // Open the component of the want list page. So maybe I could create one component for each wantlist and collection
    // but they will have different data.
    // Probaby DiscsView will be a child of main view.

  }

  onClickCollection() : void
  {
    // Open the component of the want list page. So maybe I could create one component for each wantlist and collection
    // but they will have different data.
    // Probaby DiscsView will be a child of main view.

  }
}
