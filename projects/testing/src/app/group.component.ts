import { Component, OnInit, Injector } from '@angular/core';
import { CatalogTemplate, TemplateComponent } from 'projects/page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-group',
  templateUrl: './group.component.html',
  styles: []
})
@CatalogTemplate('group')
export class GroupComponent extends TemplateComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
