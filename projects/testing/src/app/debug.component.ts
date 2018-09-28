import { Component, OnInit } from '@angular/core';
import { CatalogTemplate } from '../../../page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-debug',
  template: `
    <p>
      debug works!
    </p>
  `,
  styles: []
})
@CatalogTemplate('debug')
export class DebugComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
