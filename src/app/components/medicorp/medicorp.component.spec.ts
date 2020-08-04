import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicorpComponent } from './medicorp.component';

describe('MedicorpComponent', () => {
  let component: MedicorpComponent;
  let fixture: ComponentFixture<MedicorpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicorpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicorpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
