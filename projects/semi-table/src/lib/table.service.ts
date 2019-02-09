import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TableService<T = any> {
  private _dataSource: T[] = [];
  private readonly data: Subject<any> = new Subject();

  constructor() { }

  castData(): Observable<T> {
    return this.data.asObservable();
  }

  get dataSource(): T[] {
    return this._dataSource;
  }

  set dataSource(data: T[]) {
    this._dataSource = data;
  }

  nextData(data: T[]) {
    return this.data.next(data);
  }

}
