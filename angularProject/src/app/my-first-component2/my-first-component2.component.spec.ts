import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComponent2Component } from './my-first-component2.component';

describe('MyFirstComponent2Component', () => {
  let component: MyFirstComponent2Component;
  let fixture: ComponentFixture<MyFirstComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
