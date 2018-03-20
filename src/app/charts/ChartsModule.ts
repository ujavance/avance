import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsRouting } from './ChartsRouting';
import { UserChartsComponent } from './user-charts/user-charts.component';
import { JobChartsComponent } from './job-charts/job-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { MapChartComponent } from './map-chart/map-chart.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { LineChartComponent } from './line-chart/line-chart.component';


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
        JobChartsComponent,
        MapChartComponent,
        WordCloudComponent,
        LineChartComponent
    ]
})
export class ChartsModule { }
