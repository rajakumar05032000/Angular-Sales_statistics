import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdUiRoutingModule } from './prod-ui-routing.module';
import { ProdUiComponent } from './prod-ui.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    CommonModule,
    ProdUiRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsK00di5t3LbtzTx0bE_4wxIYXZP1Yhsw'
    })
  ],
  declarations: [ProdUiComponent]
})
export class ProdUiModule { }
