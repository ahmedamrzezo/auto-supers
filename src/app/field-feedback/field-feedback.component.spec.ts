import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFeedbackComponent } from './field-feedback.component';

describe('FieldFeedbackComponent', () => {
  let component: FieldFeedbackComponent;
  let fixture: ComponentFixture<FieldFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
