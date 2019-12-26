import { TestBed } from '@angular/core/testing';

import { SuperCarService } from './super-car.service';

describe('SuperCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperCarService = TestBed.get(SuperCarService);
    expect(service).toBeTruthy();
  });
});
