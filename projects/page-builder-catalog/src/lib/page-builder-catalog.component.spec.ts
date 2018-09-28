import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuilderCatalogComponent } from './page-builder-catalog.component';

describe('PageBuilderCatalogComponent', () => {
  let component: PageBuilderCatalogComponent;
  let fixture: ComponentFixture<PageBuilderCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBuilderCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBuilderCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
