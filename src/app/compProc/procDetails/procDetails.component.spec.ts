import { ComponentFixture, TestBed } from '@angular/core/testing';

import { procDetailsComponent } from './procDetails.component';

describe('CompProcDComponent', () => {
  let component: procDetailsComponent;
  let fixture: ComponentFixture<procDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ procDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(procDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
