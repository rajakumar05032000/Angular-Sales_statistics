import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdUiService } from '../prod-ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PageSettingsModel, PdfExport } from '@syncfusion/ej2-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GridComponent, PdfExportProperties, SaveEventArgs, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids/';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import * as _ from "lodash";
import * as Chart from 'chart.js';
import { ChartOptions } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';
const UsersJson = require("../../../../user.json");
interface USERS{
    id: Number;
    name: String;
    username: String;
    email: String;
}


@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.css']
})
export class UserGridComponent implements OnInit {

  @ViewChild('grid')
  public grid: GridComponent;

  public nav: any;
  public toolbarOptions: ToolbarItems[];
  public pageSettings: PageSettingsModel;
  alldata: any;
  public data = [];
  


  public constructor(private http: HttpClient,private prodService: ProdUiService) { 
    
  }
  ngOnInit() {
   
    this.http.get<any>('http://localhost:3000/data').subscribe(res1 => {
      this.alldata = res1;
      console.log(res1);
     for(let x in this.alldata)
     {
      
       var date = this.alldata[x]['Date'];
       var zone = this.alldata[x]['Zone'];
       var ward = this.alldata[x]['Ward'];
       var sc_no = this.alldata[x]['SC No'];
       var phone_no = this.alldata[x]['Phone No'];
       var uid = this.alldata[x]['UID'];
       var location = this.alldata[x]['Location'];
       var operated_time = this.alldata[x]['Operated Time'];
       var column_9 = this.alldata[x]['Column9'];
       var column_10 = this.alldata[x]['Column10'];

       var burn_load = this.alldata[x]['Burn Load (W)'];
       var base_load = this.alldata[x]['Base Load (W)'];
       var correction_factor = this.alldata[x]['Correction Factor'];
       var baseline = this.alldata[x]['Baseline (kWh)'];
       var adjusted_baseline = this.alldata[x]['Adjusted Baseline (kWh)'];
       var actual_consumption = this.alldata[x]['Actual Consumption (kWh)'];

       var energy_saved = this.alldata[x]['Energy Saved'];
       var column_18 = this.alldata[x]['Column18'];
       var status = this.alldata[x]['Status'];
       var latitude = this.alldata[x]['Latitude'];
       var longitude = this.alldata[x]['Longitude'];
       var status2 = this.alldata[x]['Status2'];

       this.data.push({Date:date,"Zone":zone,"Ward":ward,"Sc_no":sc_no,"Phone_no":phone_no,"UID":uid,"Location":location,
          "Operated_time":operated_time,"Column9":column_9,"Column10":column_10,"Burn_load":burn_load,"Base_load":base_load,
        "correction_factor":correction_factor,"baseline":baseline,"Adjusted_Baseline":adjusted_baseline,"Actual_consumption":actual_consumption,
      "Energy_saved":energy_saved,"Column18":column_18,"Status":status,"Latitude":latitude,"Longitude":longitude,"Status2":status2});

     }
     console.log(this.data);
     this.toolbarOptions = ['ColumnChooser', 'Print', 'Search','PdfExport'];
     this.pageSettings = { pageSize: 50 };
 
     this.prodService.prodGridData().subscribe(data =>{
       console.log(data);
       if(data.success) {
         this.data = data.result
       }
       console.log(this.data)
     })
     this.dataBound();
    });
  

     
   
  }

  /**
   * Databound for assign the column datas
   */
  dataBound() {
    this.grid.autoFitColumns(['Date', 'Zone', 'Ward','SC No','Phone No','UID','Location','Operated Time','Column9','Column10','Burn Load (W)','Base Load (W)','Correction Factor','Baseline (kWh)','Adjusted Baseline (kWh)','Actual Consumption (kWh)','Energy Saved','Column18','Status','Latitude','Longitude','Status2']);
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


