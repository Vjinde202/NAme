import { TestBed } from '@angular/core/testing';

import { TestAPIService } from './testapi.service';

describe('TestapiService', () => {
  let service: TestAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
