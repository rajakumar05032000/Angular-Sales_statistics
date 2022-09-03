import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './basicLayout.component';



const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children:[
      {
        path: '', redirectTo: 'prod',
      },
      {
        path: 'prod', loadChildren: () => import(`./views/prod-ui/prod-ui.module`).then(m => m.ProdUiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
