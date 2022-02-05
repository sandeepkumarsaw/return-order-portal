import { TestBed } from '@angular/core/testing';

import { ComponentProcService } from './componentProc.service';

describe('CompProcService', () => {
  let service: ComponentProcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentProcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
