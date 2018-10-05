import { Component, OnInit, Injector } from '@angular/core';
import { CatalogTemplate, TemplateComponent } from 'projects/page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-group',
  templateUrl: './group.component.html',
  styles: [
    `:host {
      display: block;
      padding: 1em;
      padding-top: 0;
      border-radius: 6px;
      background-color: #55b;
      border: solid 1px #77b;
      margin-bottom: 1em;
      box-shadow: 1px 1px 5px #ccc;
    }`
  ]
})
@CatalogTemplate('group')
export class GroupComponent extends TemplateComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
