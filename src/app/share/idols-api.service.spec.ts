import { TestBed } from '@angular/core/testing';

import { IdolsApiService } from './idols-api.service';

describe('IdolsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdolsApiService = TestBed.get(IdolsApiService);
    expect(service).toBeTruthy();
  });
});
