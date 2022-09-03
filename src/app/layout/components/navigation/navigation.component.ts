import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery: any;



declare interface RouteInfo {
  path?: string;
  title: string;
  icon: string;
  class: string;
  type: string;
  collapse?: string;
  children?: ChildrenItems[];
}
declare interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
  class?: string;
}


@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  menuItems: any[];
  public hide = false;

  // user = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router) { }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      });
    }
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
