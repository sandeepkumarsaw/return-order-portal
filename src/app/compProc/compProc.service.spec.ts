import { TestBed } from '@angular/core/testing';

import { CompProcService } from './comp-proc.service';

describe('CompProcService', () => {
  let service: CompProcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompProcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
