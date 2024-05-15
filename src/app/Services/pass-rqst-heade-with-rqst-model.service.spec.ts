import { TestBed } from '@angular/core/testing';

import { PassRqstHeadeWithRqstModelService } from './pass-rqst-heade-with-rqst-model.service';

describe('PassRqstHeadeWithRqstModelService', () => {
  let service: PassRqstHeadeWithRqstModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassRqstHeadeWithRqstModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
