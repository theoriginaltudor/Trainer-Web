import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutRoutinesComponent } from './workout-routines.component';

describe('WorkoutRoutinesComponent', () => {
  let component: WorkoutRoutinesComponent;
  let fixture: ComponentFixture<WorkoutRoutinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutRoutinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
