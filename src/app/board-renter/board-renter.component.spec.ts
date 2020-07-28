import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRenterComponent } from './board-renter.component';

describe('BoardRenterComponent', () => {
  let component: BoardRenterComponent;
  let fixture: ComponentFixture<BoardRenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardRenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
