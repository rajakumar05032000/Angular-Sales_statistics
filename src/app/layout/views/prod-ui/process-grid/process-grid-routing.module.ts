import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessGridComponent } from "./process-grid.component";

const routes: Routes = [
  {
    path: '',
    component: ProcessGridComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessGridRoutingModule { }
