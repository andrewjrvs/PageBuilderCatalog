import { Routes, RouterModule } from '@angular/router';
import { PageBuilderCatalogComponent } from './page-builder-catalog.component';
import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';

const moduleRoutes: Routes = [
    { path: '', component: PageBuilderCatalogComponent },
    { path: ':id', component: BaseComponent }
];

@NgModule({
    exports: [RouterModule]
    , imports: [RouterModule.forChild(moduleRoutes)]
})
export class ExtendedReportingRoutingModule {}
