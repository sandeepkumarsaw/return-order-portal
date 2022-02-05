import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProcComponent } from './completeProc.component';

describe('CompleteProcComponent', () => {
  let component: CompleteProcComponent;
  let fixture: ComponentFixture<CompleteProcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteProcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
