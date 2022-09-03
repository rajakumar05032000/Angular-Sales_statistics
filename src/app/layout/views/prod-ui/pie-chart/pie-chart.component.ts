import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  doughnutChartLabels: Label[] = ['On', 'Off'];
  doughnutChartData: MultiDataSet = [
    [55, 25]
  ];
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [{
    backgroundColor: ['rgba(26,179,148,0.4)', 'rgba(26,179,148,1)']
   }];
}
