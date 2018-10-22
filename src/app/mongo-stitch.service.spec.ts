import { TestBed, inject } from '@angular/core/testing';

import { MongoStitchService } from './mongo-stitch.service';

describe('MongoStitchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoStitchService]
    });
  });

  it('should be created', inject([MongoStitchService], (service: MongoStitchService) => {
    expect(service).toBeTruthy();
  }));
});
