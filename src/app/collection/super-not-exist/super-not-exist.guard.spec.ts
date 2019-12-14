import { TestBed, async, inject } from '@angular/core/testing';

import { SuperNotExistGuard } from './super-not-exist.guard';

describe('SuperNotExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperNotExistGuard]
    });
  });

  it('should ...', inject([SuperNotExistGuard], (guard: SuperNotExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
