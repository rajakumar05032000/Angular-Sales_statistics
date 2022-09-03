import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdUiService } from '../prod-ui.service';
import { PageSettingsModel, PdfExport } from '@syncfusion/ej2-grids';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GridComponent, PdfExportProperties, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ToolbarItems } from '@syncfusion/ej2-angular-grids/';
import { Console } from 'console';

@Component({
  selector: 'app-process-grid',
  templateUrl: './process-grid.component.html',
  styleUrls: ['./process-grid.component.css']
})
export class ProcessGridComponent implements OnInit {

  @ViewChild('grid')
  public grid: GridComponent;
  public data: Object[];
  public saveData = [];
  public LampTypeMasterForm: FormGroup;


  public toolbarOptions: ToolbarItems[];
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;


  constructor(private prodService: ProdUiService) { }

  ngOnInit() {

    this.LampTypeMasterForm = new FormGroup({
      'TypeName': new FormControl('', [Validators.required, Validators.pattern("^[A-Z 0-9,]*$")]),
      'LampCodeRange': new FormControl('', [Validators.required, Validators.pattern("^[A-Z 0-9,]*$")]),
      'TypeCode': new FormControl('', [Validators.required, Validators.pattern("^[A-Z 0-9,]*$")]),
      'DriverCodeLength': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'LampCodeLength': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'WattageRangeMin': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'WattageRangeMax': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'VoltageRange': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'CurrentRange': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'VoltageMax': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'VoltageMin': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'CurrentMax': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'CurrentMin': new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      'Process': new FormControl('', [Validators.required, Validators.pattern("^[A-Z,]*$")])
    })

    this.toolbarOptions = ['Add', 'ColumnChooser', 'Print', 'Search', 'PdfExport'];
    this.pageSettings = { pageSize: 50 };
    this.editSettings = { showConfirmDialog: true, showDeleteConfirmDialog: true, allowAdding: true };

    this.prodService.prodTypeData().subscribe(data => {
      if (data.success) {
        this.data = data.result
      }
      console.log(this.data)
    })
  }

  dataBound() {
    this.grid.autoFitColumns(['LampType', 'process']);
  }

  actionBegin(args: any): void {


    if (args.requestType === "add") {
      this.LampTypeMasterForm.reset();
    }

    if (args.requestType === 'save') {
      if (this.LampTypeMasterForm.invalid) {
        args.cancel = true;
      }
    }
  }
  actionComplete(args: any): void {
    if (args.requestType === "save" && this.LampTypeMasterForm.valid) {
      var process1 = this.LampTypeMasterForm.value.Process;
      this.LampTypeMasterForm.value.Process = process1.split(',');
      console.log(this.LampTypeMasterForm.value)
      this.saveData.push(this.LampTypeMasterForm.value);
      console.log(this.saveData)
    }
  }

  onCreate() {
    if (this.LampTypeMasterForm.valid) {
      this.prodService.saveLampTypeSession(this.saveData).subscribe(data => {
        console.log(data);
      });
    }
  }
}
