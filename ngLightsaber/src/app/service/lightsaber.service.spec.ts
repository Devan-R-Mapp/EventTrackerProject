import { TestBed } from '@angular/core/testing';

import { LightsaberService } from './lightsaber.service';

describe('LightsaberService', () => {
  let service: LightsaberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightsaberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
