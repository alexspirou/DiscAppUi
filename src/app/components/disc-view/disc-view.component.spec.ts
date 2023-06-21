import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscViewComponent } from './disc-view.component';

describe('DiscViewComponent', () => {
  let component: DiscViewComponent;
  let fixture: ComponentFixture<DiscViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
