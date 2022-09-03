import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProdUiService } from '../prod-ui.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { DialogEditEventArgs, SaveEventArgs, EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { element } from 'protractor';



@Component({
  selector: 'app-scan-ui',
  templateUrl: './scan-ui.component.html',
  styleUrls: ['./scan-ui.component.css']
})
export class ScanUIComponent implements OnInit {

  public TypeMasterForm: FormGroup; // FormGroup has been declared
  public ProcessMasterForm: FormGroup;
  public editSettings;
  public userData = [];
  public process = [];
  public process1 = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private prodService: ProdUiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.prodService.userData().subscribe(data => {
      if (data.success) {
        this.userData = data.result
      }
    });

    this.data.value.Process.forEach(element => {
      this.process.push({ 'Process': element, 'User': '' })
    });

    this.ProcessMasterForm = new FormGroup({
      'Process': new FormControl('', [Validators.required]),
      'User': new FormControl('', [Validators.required]),
    })
    this.TypeMasterForm = new FormGroup({
      'DriverCode': new FormControl('', [Validators.required, Validators.maxLength(this.data.value.DriverCodeLength)]),
      'LampCode': new FormControl('', [Validators.required, Validators.maxLength(this.data.value.LampCodeLength)]),
      'Voltage': new FormControl('', [Validators.required, Validators.min(this.data.value.VoltageMin), Validators.max(this.data.value.VoltageMax)]),
      'Current': new FormControl('', [Validators.required, Validators.min(this.data.value.CurrentMin), Validators.max(this.data.value.CurrentMax)]),
      'Power': new FormControl('', [Validators.required, Validators.min(this.data.value.WattageRangeMin), Validators.max(this.data.value.WattageRangeMax)]),
    })
    this.editSettings = { allowEditing: true };
  }

  actionBegin(args: any): void {
    if (args.requestType === 'beginEdit') {
      this.ProcessMasterForm.reset();
    }
    else {
    }
  }
  actionComplete(args: any): void {

    this.process[args.rowIndex]['User'] = this.ProcessMasterForm.value.User
    if (args.requestType === 'beginEdit') {
      this.ProcessMasterForm.patchValue({
        Process: args.rowData.Process,
        User: args.rowData.User
      }
      )
    }
  }
  onCreate() {
    if (this.ProcessMasterForm.valid && this.TypeMasterForm.valid) {
      console.log(this.TypeMasterForm.value,
        
        )
      this.process.push(this.TypeMasterForm.value)
      console.log(this.process)
      // this.prodService.saveProductionDataSession(this.process).subscribe(data => {
      //   console.log(data)
      // });
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
