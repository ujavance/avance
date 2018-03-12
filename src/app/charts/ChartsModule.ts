import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsRouting } from './ChartsRouting';
import { UserChartsComponent } from './user-charts/user-charts.component';
import { JobChartsComponent } from './job-charts/job-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
    imports: [
        BrowserModule,
        ChartsRouting,
        ReactiveFormsModule,
        FormsModule,
        CommonModule, 
        NgxEchartsModule
    ],
    declarations: [
        UserChartsComponent,
        JobChartsComponent
    ]
})
export class ChartsModule { }
