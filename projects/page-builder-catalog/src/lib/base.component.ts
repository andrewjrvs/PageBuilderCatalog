import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactory, Injector } from '@angular/core';
import { TemplateComponent } from './template-component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { Page } from './models/page';
import { PageBuilderCatalogService } from './page-builder-catalog.service';

@Component({
  selector: 'cat-base',
  template: '<ng-template #content></ng-template>',
  styles: []
})
export class BaseComponent extends TemplateComponent implements OnInit, AfterViewInit {

  private page$: Observable<Page>;

  constructor(private _route: ActivatedRoute,
            injector: Injector,
            private _pg: PageBuilderCatalogService) {
    super(injector);
    this.page$ = this._route.params.pipe(
      map((p: ParamMap) => p['id'])
      , switchMap((v, i) => this._pg.get(v)));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.page$.subscribe((pg) => this.buildInstructions(pg.items));
  }

}
