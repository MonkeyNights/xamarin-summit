import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Start2019Component } from './start.component';

describe('Start2019Component', () => {
  let component: Start2019Component;
  let fixture: ComponentFixture<Start2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Start2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Start2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
