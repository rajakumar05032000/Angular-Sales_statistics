import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserGridRoutingModule } from './user-grid-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PageService, SortService,
  FilterService, GroupService, ToolbarService,
  ColumnChooserService, ResizeService, FreezeService,
  SelectionService, PdfExportService, ExcelExportService,EditService  } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { UserGridComponent } from './user-grid.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MaterialModule } from 'src/app/material-module';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../map/map.component';




@NgModule({
  declarations: [UserGridComponent,PieChartComponent,LineChartComponent,BarChartComponent,MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    DropDownListAllModule,
    UserGridRoutingModule,
    ButtonModule,
    MaterialModule,
    DateRangePickerModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsK00di5t3LbtzTx0bE_4wxIYXZP1Yhsw'
    })
  ],
  providers: [EditService,
    PageService,
    SortService,
    FilterService,
    GroupService,
    ToolbarService,
    ColumnChooserService,
    ResizeService,
    FreezeService,
    SelectionService,
    PdfExportService,
    ExcelExportService,
  ],
  bootstrap: [UserGridComponent]
})
export class UserGridModule { }
