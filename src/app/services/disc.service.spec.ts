import { TestBed } from '@angular/core/testing';

import { DiscService } from "./disc.service"

describe('DiscService', () => {
  let service: DiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
