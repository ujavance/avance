import { TestBed, inject } from '@angular/core/testing';

import { MycookieService } from './mycookie.service';

describe('MycookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycookieService]
    });
  });

  it('should be created', inject([MycookieService], (service: MycookieService) => {
    expect(service).toBeTruthy();
  }));
});
