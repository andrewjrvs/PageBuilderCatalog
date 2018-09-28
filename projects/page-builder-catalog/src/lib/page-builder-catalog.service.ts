import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from './models/page';
import { BaseComponent } from './base.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageBuilderCatalogService {

  private _pageList = new BehaviorSubject<Page[]>(null);
  public pageList$ = this._pageList.asObservable();

  constructor(private _router: Router) { }

  public attach(pages: Page[]): void {
    this._pageList.next(pages);
  }

  public get(id: string): Observable<Page> {
    return this._pageList.pipe(map(pgs => pgs.find(pg => pg.id === id)));
  }
}
