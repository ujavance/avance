import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingRecordsComponent } from './matching-records.component';

describe('MatchingRecordsComponent', () => {
  let component: MatchingRecordsComponent;
  let fixture: ComponentFixture<MatchingRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
