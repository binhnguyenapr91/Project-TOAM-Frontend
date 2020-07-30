import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAllComponent } from './search-by-all.component';

describe('SearchByAllComponent', () => {
  let component: SearchByAllComponent;
  let fixture: ComponentFixture<SearchByAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
