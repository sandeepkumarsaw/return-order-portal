import { TestBed } from '@angular/core/testing';

import { CompleteProcService } from './completeProc.service';

describe('CompleteProcService', () => {
  let service: CompleteProcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteProcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
