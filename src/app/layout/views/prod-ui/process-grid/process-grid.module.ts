import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessGridRoutingModule } from './process-grid-routing.module';
import { ProcessGridComponent } from './process-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PageService, SortService,
  FilterService, GroupService, ToolbarService,
  ColumnChooserService, ResizeService, FreezeService,
  SelectionService, PdfExportService, ExcelExportService,EditService  } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MaterialModule } from 'src/app/material-module';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [ProcessGridComponent],
  imports: [
    CommonModule,
    ProcessGridRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    DropDownListAllModule,
    ButtonModule,
    MaterialModule,
    DateRangePickerModule
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
    ExcelExportService],
  bootstrap: [ProcessGridComponent]
})
export class ProcessGridModule { }
