import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { PageSettingsModel, PdfExport } from '@syncfusion/ej2-grids';
import { ProdUiService } from '../prod-ui.service';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GridComponent, PdfExportProperties } from '@syncfusion/ej2-angular-grids/';
import {ToolbarItems} from '@syncfusion/ej2-angular-grids/';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prod-grid',
  templateUrl: './prod-grid.component.html',
  styleUrls: ['./prod-grid.component.css']
})
export class ProdGridComponent implements OnInit, OnDestroy {

  @ViewChild('grid')
  public grid: GridComponent;

  public nav: any;
  public toolbarOptions: ToolbarItems[];
  public pageSettings: PageSettingsModel;
  public data: Object[];

  public constructor(private prodService: ProdUiService) {}
  
  ngOnInit() {

    this.toolbarOptions = ['ColumnChooser', 'Print', 'Search','PdfExport'];
    this.pageSettings = { pageSize: 50 };

    /**
     * Service call function to get the data
     */
    this.prodService.prodGridData().subscribe(data =>{
      console.log(data);
      if(data.success) {
        this.data = data.result
      }
      console.log(this.data)
    })
  }

  /**
   * Databound for assign the column datas
   */
  dataBound() {
    this.grid.autoFitColumns(['LampCode', 'Id', 'DriverCode','CreatedBy',
     'CreatedDate', 'ChipAssembleBy', 'DriverAssembleBy', 'LensAssembleBy', 'PolyCarbonateAssembledBy', 'SerialNoTrackingBy']);
  }
  
  public ngOnDestroy(): any {
    this.nav.classList.remove('white-bg');
  }

  toolbarClick(args: ClickEventArgs): void {
    
    if (args.item.text === 'Excel Export') 
    {
     this.grid.excelExport();
    }
  }

}
