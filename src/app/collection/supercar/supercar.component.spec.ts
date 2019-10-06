import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercarComponent } from './supercar.component';

describe('SupercarComponent', () => {
  let component: SupercarComponent;
  let fixture: ComponentFixture<SupercarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
