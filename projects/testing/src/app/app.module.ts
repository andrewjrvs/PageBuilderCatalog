import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageBuilderCatalogService } from 'projects/page-builder-catalog/src/public_api';
import { HomeComponent } from './home.component';
import { GroupComponent } from './group.component';
import { DebugComponent } from './debug.component';
import { HeadingComponent } from './heading.component';
import { ParagraphComponent } from './paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupComponent,
    DebugComponent,
    HeadingComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PageBuilderCatalogModule
  ],
  providers: [PageBuilderCatalogService],
  bootstrap: [AppComponent],
  entryComponents: [
    GroupComponent,
    DebugComponent,
    HeadingComponent,
    ParagraphComponent
  ]
})
export class AppModule {

  constructor() {

  }

}
