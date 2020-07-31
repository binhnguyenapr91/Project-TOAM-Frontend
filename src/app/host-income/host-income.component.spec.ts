import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostIncomeComponent } from './host-income.component';

describe('HostIncomeComponent', () => {
  let component: HostIncomeComponent;
  let fixture: ComponentFixture<HostIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
