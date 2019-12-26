import { TestBed } from '@angular/core/testing';

import { SupersResolverService } from './supers-resolver.service';

describe('SupersResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupersResolverService = TestBed.get(SupersResolverService);
    expect(service).toBeTruthy();
  });
});
