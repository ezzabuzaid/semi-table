import { NgModule } from '@angular/core';
import { TableFilterDirective } from './directive/filter.directive';
import { SemiTableComponent } from './components/table-view/table-view.component';
import { CommonModule } from '@angular/common';
import { FilterableDirective } from './directive/filterable.directive';
import { TableHeadComponent } from './components/table-actions/table-head.component';
import { TableActionsComponent } from './components/table-actions/table-actions.component';
import { TableSortDirective } from './directive/sort.directive';

@NgModule({
    declarations: [
        TableFilterDirective,
        FilterableDirective,
        SemiTableComponent,
        TableActionsComponent,
        TableHeadComponent,
        TableSortDirective
    ],
    exports: [
        SemiTableComponent,
        FilterableDirective,
        TableActionsComponent,
        TableHeadComponent
    ],
    providers: [],
    imports: [
        CommonModule,
    ]
})
export class SemiTableModule { }
