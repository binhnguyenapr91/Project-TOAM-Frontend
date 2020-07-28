import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdminHeaderComponent } from './layout-admin-header.component';

describe('LayoutAdminHeaderComponent', () => {
  let component: LayoutAdminHeaderComponent;
  let fixture: ComponentFixture<LayoutAdminHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAdminHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
