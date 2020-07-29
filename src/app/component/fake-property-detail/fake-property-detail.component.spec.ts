import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakePropertyDetailComponent } from './fake-property-detail.component';

describe('FakePropertyDetailComponent', () => {
  let component: FakePropertyDetailComponent;
  let fixture: ComponentFixture<FakePropertyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakePropertyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakePropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
