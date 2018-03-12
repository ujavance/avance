import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {BrowsingHistoryComponent} from './browsing-history/browsing-history.component';
import {CollectionComponent} from './collection/collection.component';
import {MatchingRecordsComponent} from './matching-records/matching-records.component';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {RecommendComponent} from '../recommend/recommend.component';
import {PersonalCenterRouting} from './personal-center-routing.module';
import { PersonalInformationEditComponent } from './personal-information-edit/personal-information-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    PersonalCenterRouting,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    BrowsingHistoryComponent,
    CollectionComponent,
    MatchingRecordsComponent,
    PersonalInformationComponent,
    PersonalInformationEditComponent
  ]
})
export class PersonalCenterModule {}
