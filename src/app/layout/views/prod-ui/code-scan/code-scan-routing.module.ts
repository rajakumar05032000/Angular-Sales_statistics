import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeScanComponent } from "./code-scan.component";

const routes: Routes = [
  {
    path: '',
    component: CodeScanComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeScanRoutingModule { }
