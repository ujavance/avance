import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedRecommendationComponent } from './personalized-recommendation.component';

describe('PersonalizedRecommendationComponent', () => {
  let component: PersonalizedRecommendationComponent;
  let fixture: ComponentFixture<PersonalizedRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
