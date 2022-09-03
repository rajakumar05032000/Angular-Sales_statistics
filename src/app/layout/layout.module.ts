import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { BasicLayoutComponent } from './basicLayout.component';
import { BlankLayoutComponent } from './blankLayout.component';
import { TopNavigationLayoutComponent } from './topNavigationLayout.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { ToolbarComponent, ItemDirective } from '@syncfusion/ej2-angular-navigations';
import { MomentModule } from 'angular2-moment';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    MomentModule
  ],
  declarations: [
    LayoutComponent,
    BasicLayoutComponent,
    BlankLayoutComponent,
    TopNavigationLayoutComponent,
    FooterComponent,
    NavigationComponent,
    TopnavbarComponent,
    
  ],
  exports: []
})
export class LayoutModule { }
