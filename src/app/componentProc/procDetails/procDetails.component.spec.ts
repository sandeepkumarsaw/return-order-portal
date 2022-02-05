import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcDetailsComponent } from './procDetails.component';

describe('CompProcDComponent', () => {
  let component: ProcDetailsComponent;
  let fixture: ComponentFixture<ProcDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
