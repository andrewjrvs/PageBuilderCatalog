import { TestBed } from '@angular/core/testing';

import { PageBuilderCatalogService } from './page-builder-catalog.service';

describe('PageBuilderCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageBuilderCatalogService = TestBed.get(PageBuilderCatalogService);
    expect(service).toBeTruthy();
  });
});
