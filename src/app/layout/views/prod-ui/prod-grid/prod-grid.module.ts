import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdGridComponent } from "./prod-grid.component";
import { ProdGridRoutingModule } from './prod-grid-routing.module';
import {
  GridModule, PageService, SortService, FilterService, GroupService,
  ToolbarService, ColumnChooserService, ResizeService, FreezeService,
  SelectionService,
  PdfExportService,
  ExcelExportService
} from '@syncfusion/ej2-angular-grids/';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProdGridComponent],
  imports: [
    CommonModule,
    ProdGridRoutingModule,
    GridModule,
    DateRangePickerModule,
    FormsModule
  ],
  providers: [
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
    ExcelExportService
  ],
  bootstrap: [ProdGridComponent]
})
export class ProdGridModule { }
