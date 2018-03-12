import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts.component';
import { UserChartsComponent } from './user-charts/user-charts.component';
import { JobChartsComponent } from './job-charts/job-charts.component';



const routeConfig: Routes = [{
    path: 'charts',
    component: ChartsComponent,
    children: [
        { path: 'user-charts', component: UserChartsComponent },
        { path: 'job-charts', component: JobChartsComponent },
        { path: '', redirectTo: '/charts/user-charts', pathMatch: 'full' },
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

export class ChartsRouting { }
