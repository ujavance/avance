import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobChartsComponent } from './job-charts.component';

describe('JobChartsComponent', () => {
  let component: JobChartsComponent;
  let fixture: ComponentFixture<JobChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
