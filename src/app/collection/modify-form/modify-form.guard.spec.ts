import { TestBed, async, inject } from '@angular/core/testing';

import { ModifyFormGuard } from './modify-form.guard';

describe('ModifyFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModifyFormGuard]
    });
  });

  it('should ...', inject([ModifyFormGuard], (guard: ModifyFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
