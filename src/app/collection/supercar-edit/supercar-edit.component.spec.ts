import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercarEditComponent } from './supercar-edit.component';

describe('SupercarEditComponent', () => {
  let component: SupercarEditComponent;
  let fixture: ComponentFixture<SupercarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
