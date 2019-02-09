import { Directive, HostListener, OnInit, Input, Host, Attribute, Inject, ElementRef } from '@angular/core';
import { TableService } from '../table.service';

@Directive({
  selector: '[semiTableFilter]'
})

export class TableFilterDirective implements OnInit {
  lastDataSource = [];
  keys: string[] = [];
  @Input() set semiTableFilter(keys: string[]) {
    this.keys = keys;
  }
  constructor(
    @Host() private tableService: TableService,
  ) { }

  _dataSource = [];
  get dataSource() {
    const data = this.tableService.dataSource;
    if (!this.lastDataSource.length) {
      this.lastDataSource = data;
    }
    return data;
  }
  set dataSource(data) {
    this.tableService.dataSource = data;
  }

  ngOnInit() { }

  @HostListener('input', ['$event']) filter({ target }) {
    let data = [...this.dataSource];
    const filterData = [];
    const value = String(target.value).toLowerCase();
    if (value.length && data.length) {
      for (const key of this.keys) {
        const sorted = data.filter(el => {
          const dataValue = this.getValue(key, el);
          const dataType = typeof dataValue;
          if (dataType === 'string' || dataType === 'number') {
            const keyValue = String(dataValue).toLowerCase();
            return keyValue.indexOf(value) !== -1;
          }
          return false;
        });
        filterData.push(...sorted);
      }
      data = [...new Set(filterData)];
      this.tableService.nextData(data);
    } else {
      this.tableService.nextData(this.lastDataSource);
      this.lastDataSource = [];
    }
  }

  getValue(name, obj) {
    return name.split('.').reduce((a, v) => a[v], obj);
  }


}
