import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialDetailsComponent } from './initial-details.component';

describe('InitialDetailsComponent', () => {
  let component: InitialDetailsComponent;
  let fixture: ComponentFixture<InitialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
