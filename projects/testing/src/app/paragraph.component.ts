import { Component, OnInit, Injector } from '@angular/core';
import { TemplateComponent, CatalogTemplate } from 'projects/page-builder-catalog/src/public_api';

@Component({
  selector: 'tst-paragraph',
  templateUrl: './paragraph.component.html',
  styles: [` :host { display: block; margin-top: 1em; } `]
})
@CatalogTemplate('paragraph')
export class ParagraphComponent extends TemplateComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit() {
  }

}
