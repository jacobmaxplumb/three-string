import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStringComponent } from './three-string.component';

describe('ThreeStringComponent', () => {
  let component: ThreeStringComponent;
  let fixture: ComponentFixture<ThreeStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
