import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercarDetailsComponent } from './supercar-details.component';

describe('SupercarDetailsComponent', () => {
  let component: SupercarDetailsComponent;
  let fixture: ComponentFixture<SupercarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
