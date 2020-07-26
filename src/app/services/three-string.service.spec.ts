import { TestBed } from '@angular/core/testing';

import { ThreeStringService } from './three-string.service';

describe('ThreeStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThreeStringService = TestBed.get(ThreeStringService);
    expect(service).toBeTruthy();
  });
});
