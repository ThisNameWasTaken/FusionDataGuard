import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPillComponent } from './nav-pill.component';

describe('NavPillComponent', () => {
  let component: NavPillComponent;
  let fixture: ComponentFixture<NavPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
