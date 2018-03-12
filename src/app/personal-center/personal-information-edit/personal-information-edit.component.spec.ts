import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationEditComponent } from './personal-information-edit.component';

describe('PersonalInformationEditComponent', () => {
  let component: PersonalInformationEditComponent;
  let fixture: ComponentFixture<PersonalInformationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInformationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
