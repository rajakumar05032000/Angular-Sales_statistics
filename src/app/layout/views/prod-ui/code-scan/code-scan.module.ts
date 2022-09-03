import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeScanRoutingModule } from './code-scan-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule, PageService, SortService,
  FilterService, GroupService, ToolbarService,
  ColumnChooserService, ResizeService, FreezeService,
  SelectionService, PdfExportService, ExcelExportService,EditService  } from '@syncfusion/ej2-angular-grids/';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { CodeScanComponent } from './code-scan.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { MaterialModule } from 'src/app/material-module';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScanUIComponent } from "../scan-ui/scan-ui.component"; //Import ScanUIComponent - To Open the component by using MatDialog


@NgModule({
  declarations: [ CodeScanComponent,ScanUIComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    NumericTextBoxAllModule,
    DatePickerAllModule,
    DropDownListAllModule,
    CodeScanRoutingModule,
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
  bootstrap: [CodeScanComponent],
  entryComponents: [ScanUIComponent]
})
export class CodeScanModule { }
