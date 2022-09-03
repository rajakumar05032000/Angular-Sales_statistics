import { Component, OnInit } from '@angular/core';
import { ProdUiService } from '../prod-ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaveEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids/';
import { ScanUIComponent } from "../scan-ui/scan-ui.component";//To open the ScanUIComponent in Dialog box
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-code-scan',
  templateUrl: './code-scan.component.html',
  styleUrls: ['./code-scan.component.css', './code-scan.component.scss']
})
export class CodeScanComponent implements OnInit {

  public TypeMasterForm: FormGroup;

  /**
   * The variable are used to store the data for processing
   */
  public data = [];
  public data2 = [];
  public data3 = [];
  public data4 = [];


  constructor(private prodService: ProdUiService, public dialog: MatDialog) { }
  public data1 = [
    { LampType: "HP100", process: ["CHIPASSEMBLY", "LENSASSEMBLY", "FIXING"] },
    { LampType: "SL120", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL40W", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "HB-120W", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL20SD", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB60", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB140", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL36S", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL90SD", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB36", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL20IP", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL40", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB225W", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB40W", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB150ECO", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB75", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "LB150H", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL20SSL", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "SL36ECO", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "WARM", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
    { LampType: "COOL", process: ["CHIPASSEMBLY", "LENSASSEMBLY"] },
  ];

  ngOnInit() {

    /**
     * The date is used to get data to display in UI for today production
     */
    // const today = this.convertDateFormat();
    const today = '9/17/2016'
    console.log(today)

    this.prodService.prodTypeData().subscribe(data => {
      if (data.success) {
        this.data = data.result
      }
    })

    this.prodService.prodGridData().subscribe(data => {
      if (data.success) {
        this.data3 = data.result
        // console.log(data.result)
      }
      /**
       * For Each in data3 used to get the data for today counting
       */
      this.data3.forEach(element => {
        if (element.CreatedDate === today) {
          this.data4.push(element)
        }
      })
      // console.log(this.data4)

    })

  }

  /**
   * ConvertDateFormat function used to get the date in MM/DD/YYYY format
   */
  convertDateFormat() {
    const date = new Date(),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [mnth, day, date.getFullYear()].join('-');
  }

  async onClickOfLamp(e) {

    let value = this.data.find(x => x.TypeName === e);
    console.log(value)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = '90%';
    dialogConfig.data = { value };
    const dialogRef = this.dialog.open(ScanUIComponent,
      dialogConfig);
    dialogRef.disableClose = true;

  }
}
