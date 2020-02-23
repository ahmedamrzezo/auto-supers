import { TestBed } from '@angular/core/testing';

import { ImgServiceService } from './img-service.service';

describe('ImgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgServiceService = TestBed.get(ImgServiceService);
    expect(service).toBeTruthy();
  });
});
