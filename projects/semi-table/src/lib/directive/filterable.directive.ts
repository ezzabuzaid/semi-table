import { Directive, OnInit, Input, Inject, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SemiTableComponent } from '../components/table-view/table-view.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'semi-table table thead tr:first-child semi-table-head > th'
})

export class FilterableDirective implements OnInit {
  @Input() filterable: string = null;
  constructor(
    @Inject(SemiTableComponent) private tableComponent: SemiTableComponent,
  ) { }

  ngOnInit() {
    this.tableComponent.registerColumn(this.filterable);
  }

}
