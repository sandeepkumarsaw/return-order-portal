import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompProcDComponent } from './compProcDetails.component';

describe('CompProcDComponent', () => {
  let component: CompProcDComponent;
  let fixture: ComponentFixture<CompProcDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompProcDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompProcDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
