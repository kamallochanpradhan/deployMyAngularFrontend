import { TestBed } from '@angular/core/testing';

import { ErrorlogginginterceptorService } from './errorlogginginterceptor.service';

describe('ErrorlogginginterceptorService', () => {
  let service: ErrorlogginginterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorlogginginterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
