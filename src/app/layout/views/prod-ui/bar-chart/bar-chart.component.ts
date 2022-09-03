import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Lamp 1', 'Lamp 2', 'Lamp 3', 'Lamp 4', 'Lamp 5', 'Lamp 6'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartColors: Color[] = [{
    backgroundColor: ['rgba(26,179,148,0.8)',,'rgba(26,179,148,0.8)',,'rgba(26,179,148,0.8)',,]
   }];
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'High Usage Lamp' }
  ];
}
