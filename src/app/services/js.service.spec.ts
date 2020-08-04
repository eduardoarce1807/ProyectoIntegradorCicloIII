import { TestBed } from '@angular/core/testing';

import { JSService } from './js.service';

describe('JSService', () => {
  let service: JSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
