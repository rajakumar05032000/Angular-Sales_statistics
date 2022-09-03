import { Component, OnInit } from '@angular/core';
import { detectBody } from '../app.helpers';

// declare var jQuery: any;

@Component({
  selector: 'app-basic',
  templateUrl: 'basicLayout.template.html',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent  implements OnInit {

  public ngOnInit(): any {
    // detectBody();
  }

  public onResize() {
    // detectBody();
  }

}
