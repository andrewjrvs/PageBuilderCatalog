import { Component, OnInit, Injector } from '@angular/core';
import { TemplateComponent, CatalogTemplate } from 'projects/page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-heading',
  templateUrl: './heading.component.html',
  styles: []
})
@CatalogTemplate('heading')
export class HeadingComponent extends TemplateComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
