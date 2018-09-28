import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageBuilderCatalogService } from 'projects/page-builder-catalog/src/public_api';
import { HomeComponent } from './home.component';
import { GroupComponent } from './group.component';
import { DebugComponent } from './debug.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PageBuilderCatalogModule
  ],
  providers: [PageBuilderCatalogService],
  bootstrap: [AppComponent],
  entryComponents: [GroupComponent, DebugComponent]
})
export class AppModule {

  constructor(private bgService: PageBuilderCatalogService) {
    // alternative... https://vsavkin.com/angular-router-declarative-lazy-loading-7071d1f203ee
    this.bgService.attach([
      {
        title: 'Test Page1',
        id: 'tp1',
        items: [
          {
            type: 'group',
            label: 'testing',
            childInstructions: [
              { type: 'debug' },
              { type: 'group'
                , label: 'New SUB group'
                , childInstructions: [
                  { type: 'debug' }
                ]}
            ]
          },
          {
            type: 'group',
            label: 'testing',
            childInstructions: [
              { type: 'debug' },
              { type: 'debug' },
              { type: 'debug' }
            ]
          }
        ]
      },
      {
        title: 'Test Page2',
        id: 'tp2'
      }
    ]);

  }

}
