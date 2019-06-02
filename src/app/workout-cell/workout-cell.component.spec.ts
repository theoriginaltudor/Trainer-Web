import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCellComponent } from './workout-cell.component';

describe('WorkoutCellComponent', () => {
  let component: WorkoutCellComponent;
  let fixture: ComponentFixture<WorkoutCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
