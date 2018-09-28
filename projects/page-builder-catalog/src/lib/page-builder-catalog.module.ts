import { NgModule, ModuleWithProviders } from '@angular/core';
import { PageBuilderCatalogComponent } from './page-builder-catalog.component';
import { ExtendedReportingRoutingModule } from './page-builder-catalog.routing';
import { PageBuilderCatalogService } from './page-builder-catalog.service';
import { BaseComponent } from './base.component';
import { DisplayBuilderService } from './display-builder.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@NgModule({
  imports: [
    ExtendedReportingRoutingModule,
    CommonModule,
  ],
  declarations: [PageBuilderCatalogComponent, BaseComponent],
  exports: [PageBuilderCatalogComponent, BaseComponent],
  entryComponents: [ BaseComponent ]
})
export class PageBuilderCatalogModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PageBuilderCatalogModule,
      providers: [ DisplayBuilderService, PageBuilderCatalogService ]
    };
  }

  constructor(_router: Router, _bldr: PageBuilderCatalogService ) {
    // _bldr.pageList$.subscribe(pages => {
    //   pages.forEach(pg => {
    //     console.log(_router.config);
    //     const rts = (<any>_router.config.filter((d) => d.path === 'subPages'));
    //     console.log(rts);
    //     const rt = rts[0];
    //     console.log(rt, rt._loadedConfig);
    //     rt._loadedConfig.routes.unshift({path: pg.id, component: BaseComponent, data: {page: pg}});
    //   });
    // });
  }
}
