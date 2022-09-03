import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdUiComponent } from "./prod-ui.component";

const routes: Routes = [
  {
    path: '',
    component: ProdUiComponent,

    /**
      ** Routing Functions to route the pages
      ** By default the page is routed to CodeScan Page
    * */

    children: [{
      path: '', loadChildren: () => import(`./code-scan/code-scan.module`).then(m => m.CodeScanModule)},
      {path: 'grid', loadChildren: () => import(`./prod-grid/prod-grid.module`).then(m => m.ProdGridModule)},
      {path: 'usergrid', loadChildren: () => import(`./user-grid/user-grid.module`).then(m => m.UserGridModule)},
      {path: 'processgrid', loadChildren: () => import(`./process-grid/process-grid.module`).then(m => m.ProcessGridModule),
  




    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdUiRoutingModule { }
