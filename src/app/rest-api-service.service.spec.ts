import { TestBed, inject } from '@angular/core/testing';

import { RestApiServiceService } from './rest-api-service.service';

describe('RestApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiServiceService]
    });
  });

  it('should be created', inject([RestApiServiceService], (service: RestApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
