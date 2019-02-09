import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ContentChild,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { TableService } from '../../table.service';
import { TableActionsComponent } from '../table-actions/table-actions.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'semi-table',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [TableService]
})
export class SemiTableComponent implements OnInit, AfterContentInit, OnDestroy {
  private _dataSource = [];
  private locked = false;

  public columns = [];

  private _unsubscribe = new Subject;

  @Input() classes: string = null;

  @ContentChild(TemplateRef) tableBody;

  @ContentChild(TableActionsComponent, { read: TableActionsComponent }) actionsComponent: TableActionsComponent;

  @Input('dataSource')
  set $dataSource(data: any[]) {
    this.tableService.dataSource = data;
    this._dataSource = data;
  }

  set dataSource(data) {
    this.tableService.dataSource = data;
    this._dataSource = data;
  }
  get dataSource(): any[] {
    return this._dataSource;
  }

  registerColumn(column) {
    if (!this.locked) {
      this.columns.push(column);
    }
  }

  constructor(
    private cd: ChangeDetectorRef,
    private tableService: TableService,
  ) { }

  ngOnInit() {
    this.tableService
      .castData()
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(data => {
        this.dataSource = data;
        console.log(data);
      });
  }

  ngAfterContentInit() {
    this.locked = true;
    console.log(this.columns, this.actionsComponent);
    if (this.actionsComponent.position === 'start') {
      this.columns.shift();
    } else {
      // this.columns.pop();
    }
  }

  trackByFn(index, item) {
    const by = item.id || item.name || Object.keys(this.dataSource)[0] || item || index;
    return by;
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

}
