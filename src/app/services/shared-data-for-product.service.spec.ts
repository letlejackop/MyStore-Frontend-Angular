import { TestBed } from '@angular/core/testing';

import { SharedDataForProductService } from './shared-data-for-product.service';

describe('SharedDataForProductService', () => {
  let service: SharedDataForProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataForProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
