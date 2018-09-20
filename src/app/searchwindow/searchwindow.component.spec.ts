import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchwindowComponent } from './searchwindow.component';

describe('SearchwindowComponent', () => {
  let component: SearchwindowComponent;
  let fixture: ComponentFixture<SearchwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
