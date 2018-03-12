import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotJobsComponent } from './hot-jobs.component';

describe('HotJobsComponent', () => {
  let component: HotJobsComponent;
  let fixture: ComponentFixture<HotJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
