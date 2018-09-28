import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';

import { findCatalogTemplate } from './catalog-template.decorator';


/**
 * Service for locating the factories for template componenets.
 */
@Injectable({
  providedIn: 'root'
})
export class DisplayBuilderService {

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  public getComponentFactoryByName(componentName: string): ComponentFactory<any> {
    const TmpComponent = findCatalogTemplate(componentName);
    if (!TmpComponent) {
      throw new Error(`Unable to locate '${componentName}'`);
    }
    const factory = this._componentFactoryResolver.resolveComponentFactory(TmpComponent);
    return factory;
  }
}
