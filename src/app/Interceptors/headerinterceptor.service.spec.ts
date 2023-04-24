import { TestBed } from '@angular/core/testing';

import { HeaderinterceptorService } from './headerinterceptor.service';

describe('HeaderinterceptorService', () => {
  let service: HeaderinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
