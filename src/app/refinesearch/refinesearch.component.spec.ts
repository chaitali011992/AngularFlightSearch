import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinesearchComponent } from './refinesearch.component';

describe('RefinesearchComponent', () => {
  let component: RefinesearchComponent;
  let fixture: ComponentFixture<RefinesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
