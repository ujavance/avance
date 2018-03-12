import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PersonalInformationComponent} from './personal-information/personal-information.component';
import {CollectionComponent} from './collection/collection.component';
import {MatchingRecordsComponent} from './matching-records/matching-records.component';
import {BrowsingHistoryComponent} from './browsing-history/browsing-history.component';
import {PersonalCenterComponent} from './personal-center.component';



const routeConfig: Routes = [{
  path: 'personOK',
  component: PersonalCenterComponent,
  children: [
    { path: 'personal-information', component: PersonalInformationComponent},
    { path: 'collection', component: CollectionComponent},
    { path: 'matching-records', component: MatchingRecordsComponent},
    { path: 'browsing-history', component: BrowsingHistoryComponent},
    { path: '', redirectTo: '/person/personal-information', pathMatch: 'full'},
  ]
}
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routeConfig
    )
  ],
  exports: [
    RouterModule
  ]
})

export class PersonalCenterRouting{}
