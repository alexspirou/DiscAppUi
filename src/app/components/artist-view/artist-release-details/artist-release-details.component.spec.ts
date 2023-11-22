import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistReleaseDetailsComponent } from './artist-release-details.component';

describe('ArtistReleaseDetailsComponent', () => {
  let component: ArtistReleaseDetailsComponent;
  let fixture: ComponentFixture<ArtistReleaseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistReleaseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistReleaseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
