import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdGridComponent } from './prod-grid.component';

const routes: Routes = [
  {
    path: '',
    component: ProdGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdGridRoutingModule { }
